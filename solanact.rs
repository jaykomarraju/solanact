use anchor_lang::prelude::*;
use anchor_spl::token::{self, TokenAccount, Mint};
use solana_program::program_option::COption;

#[program]
pub mod solanact {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, bump: u8) -> ProgramResult {
        let contract = &mut ctx.accounts.contract;
        contract.authority = *ctx.accounts.authority.key;
        contract.bump = bump;
        Ok(())
    }

    pub fn create_interaction(ctx: Context<CreateInteraction>, interaction_type: u8, fee: u64) -> ProgramResult {
        let contract = &mut ctx.accounts.contract;
        let interaction = &mut ctx.accounts.interaction;
        let payer = &mut ctx.accounts.payer;

        // Check if interaction type is valid (1: Like, 2: Retweet, 3: Reply, 4: Follow)
        if interaction_type < 1 || interaction_type > 4 {
            return Err(ErrorCode::InvalidInteractionType.into());
        }

        // Transfer fee from payer to contract's token account
        let cpi_accounts = token::Transfer {
            from: payer.to_account_info(),
            to: ctx.accounts.contract_token.to_account_info(),
            authority: ctx.accounts.authority.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.clone();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        token::transfer(cpi_ctx, fee)?;

        // Create interaction
        interaction.contract = *contract.to_account_info().key;
        interaction.user = *payer.to_account_info().key;
        interaction.interaction_type = interaction_type;
        interaction.fee = fee;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, seeds = [b"Solanact".as_ref()], bump, payer = authority)]
    pub contract: Account<'info, Contract>,
    #[account(signer)]
    pub authority: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CreateInteraction<'info> {
    #[account(mut)]
    pub contract: Account<'info, Contract>,
    #[account(mut)]
    pub interaction: Account<'info, Interaction>,
    #[account(mut)]
    pub payer: AccountInfo<'info>,
    #[account(mut)]
    pub contract_token: Account<'info, TokenAccount>,
    #[account(signer)]
    pub authority: AccountInfo<'info>,
    pub token_program: AccountInfo<'info>,
}

#[account]
pub struct Contract {
    pub authority: Pubkey,
    pub bump: u8,
}

#[account]
pub struct Interaction {
    pub contract: Pubkey,
    pub user: Pubkey,
    pub interaction_type: u8,
    pub fee: u64,
}

#[error]
pub enum ErrorCode {
    #[msg("Invalid interaction type.")]
    InvalidInteractionType,
}

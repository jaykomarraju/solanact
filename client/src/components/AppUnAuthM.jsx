// This is the page that displays the app for a unauthenicated user i.e, solana wallet isn't connected.

// This is the component in the middle of the app. It contains the latest posts feed and a search bar at the top of the feed.

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from "../assets/logoAm.png";

const BackgroundColor = "#270a27";


const Container = styled.div`
  width: 55vw;
  min-height: 100vh;
  overflow: scroll;
  background-color: ${BackgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 25vw;
  padding-bottom: 40px;
`;

const SearchBar = styled.input`
  width: 80%;
  height: 40px;
  margin-top: 30px;
//   margin-left: 40px;
background-color: #1e011e;
color: #fff;
  margin-bottom: 10px;
  border-radius: 20px;
  border: none;
  padding-left: 20px;
  font-size: 20px;
`;

// Post is made up of: user profile picture, user's Name, user's username, time since post, post content text, reply button, like button, and share button, and share externally button.

const Post = styled.div`
  width: 80%;
//   height: 200px;
  margin-top: 30px;
//   margin-left: 40px;
  margin-bottom: 10px;
  border-radius: 20px;
  border: none;
  padding: 20px;
  font-size: 12px;
  background-color: #1e011e;
`;

const PostProfilePicture = styled.img`
  width: 55px;
  height: 55px;
//   margin-top: 30px;
  margin-left: 40px;
//   margin-bottom: 10px;
  border-radius: 50%;
  padding:5px;
`;

const PostName = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: #22bb31;
  margin: 0;
  margin-left: 20px;
  padding:5px;
`;

const PostUsername = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: #22bb31;
  margin: 0;
  margin-left: 20px;
  padding:5px;
`;

const PostTimeSince = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: #22bb31;
  margin: 0;
  margin-left: 20px;
  padding:5px;
`;

const PostContent = styled.h1`
  font-size: 15px;
  font-weight: 600;
  color: #22bb31;
  margin: 0;
  margin-left: 20px;
  padding:15px;
`;

const PostReplyButton = styled.button`
  // padding: 25px;
  font-size: 15px;
  background: transparent;
  width: 100%;
  border: none;
  text-align: left;
  color: #22bb31;
  cursor: pointer;
  margin: 20px 0;
  margin-left: 40px;
  &:hover {
    font-weight: bold;
    }
`;


const PostReplyCost = styled.h1`
    font-size: 15px;
    font-weight: 600;
    color: #22bb31;
    margin: 0;
    margin-left: 20px;
    padding:5px;
`;


const PostLikeButton = styled.button`
  // padding: 25px;
  font-size: 15px;
  background: transparent;
  width: 100%;
  border: none;
  text-align: left;
  color: #22bb31;
  cursor: pointer;
  margin: 20px 0;
  margin-left: 40px;
  &:hover {
    font-weight: bold;
  }
`;

const PostShareButton = styled.button`
  // padding: 25px;
  font-size: 15px;
  background: transparent;
  width: 100%;
  border: none;
  text-align: left;
  color: #22bb31;
  cursor: pointer;
  margin: 20px 0;
  margin-left: 40px;
  &:hover {
    font-weight: bold;
  }
`;

const PostShareExternallyButton = styled.button`
  // padding: 25px;
  font-size: 15px;
  background: transparent;
  width: 100%;
  border: none;
  text-align: left;
  color: #22bb31;
  cursor: pointer;
  margin: 20px 0;
  margin-left: 40px;
  &:hover {
    font-weight: bold;
  }
`;
const Flexer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const CostTooltip = styled.div`
  display: ${({ visible }) => (visible ? "block" : "none")};
  position: absolute;
  background-color: #1e011e;
  color: #22bb31;
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
//   left: 50%;
//   transform: translateX(-50%);
  bottom: -15%;
  margin-bottom: 5px;
`;

const AppUnAuthM = () => {
  const [search, setSearch] = useState("");

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipContent, setTooltipContent] = useState("");

  const showTooltip = (content) => {
    setTooltipContent(content);
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };


  return (
    <Container>
      <SearchBar
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Post>
        <Flexer>
          <Flexer>
            <PostProfilePicture
              src="https://i.imgur.com/6S4vMBA.png"
              alt="logo"
            />
            <PostName>John Doe</PostName>
          </Flexer>
          <Flexer>
            <PostUsername>@johndoe</PostUsername>
            <PostTimeSince>1h</PostTimeSince>
          </Flexer>
        </Flexer>
        <PostContent>
          Hey guys, I'm new to Amplify and I'm looking for some help. I'm trying
          to figure out how to make a post and I'm having some trouble. Can
          anyone help me?
        </PostContent>
        <Flexer>
          <PostReplyButton
            onMouseEnter={() => showTooltip("*100 Lamports for Reply")}
            onMouseLeave={hideTooltip}
          >
            Reply
          </PostReplyButton>
          <PostLikeButton
            onMouseEnter={() => showTooltip("*50 Lamports for Like")}
            onMouseLeave={hideTooltip}
          >
            Like
          </PostLikeButton>
          <PostShareButton
            onMouseEnter={() => showTooltip("*25 Lamports for Share")}
            onMouseLeave={hideTooltip}
          >
            Share
          </PostShareButton>
          <PostShareExternallyButton>
            Share Externally
          </PostShareExternallyButton>
          <CostTooltip visible={tooltipVisible}>{tooltipContent}</CostTooltip>
        </Flexer>
      </Post>
      <Post>
        <Flexer>
          <Flexer>
            <PostProfilePicture
              src="https://i.imgur.com/6S4vMBA.png"
              alt="logo"
            />
            <PostName>John Doe</PostName>
          </Flexer>
          <Flexer>
            <PostUsername>@johndoe</PostUsername>
            <PostTimeSince>1h</PostTimeSince>
          </Flexer>
        </Flexer>
        <PostContent>
          Hey guys, I'm new to Amplify and I'm looking for some help. I'm trying
          to figure out how to make a post and I'm having some trouble. Can
          anyone help me?
        </PostContent>
        <Flexer>
          <PostReplyButton
            // onMouseEnter={() => showTooltip("100 Lamports for Reply")}
            // onMouseLeave={hideTooltip}
          >
            Reply
          </PostReplyButton>
          <PostLikeButton
            // onMouseEnter={() => showTooltip("50 Lamports for Like")}
            // onMouseLeave={hideTooltip}
          >
            Like
          </PostLikeButton>
          <PostShareButton
            // onMouseEnter={() => showTooltip("25 Lamports for Share")}
            // onMouseLeave={hideTooltip}
          >
            Share
          </PostShareButton>
          <PostShareExternallyButton>
            Share Externally
          </PostShareExternallyButton>
            </Flexer>
      </Post>
      <Post>
        <Flexer>
          <Flexer>
            <PostProfilePicture
              src="https://i.imgur.com/6S4vMBA.png"
              alt="logo"
            />
            <PostName>John Doe</PostName>
          </Flexer>
          <Flexer>
            <PostUsername>@johndoe</PostUsername>
            <PostTimeSince>1h</PostTimeSince>
          </Flexer>
        </Flexer>
        <PostContent>
          Hey guys, I'm new to Amplify and I'm looking for some help. I'm trying
          to figure out how to make a post and I'm having some trouble. Can
          anyone help me?
        </PostContent>
        <Flexer>
          <PostReplyButton
            // onMouseEnter={() => showTooltip("100 Lamports for Reply")}
            // onMouseLeave={hideTooltip}
          >
            Reply
          </PostReplyButton>
          <PostLikeButton
            // onMouseEnter={() => showTooltip("50 Lamports for Like")}
            // onMouseLeave={hideTooltip}
          >
            Like
          </PostLikeButton>
          <PostShareButton
            // onMouseEnter={() => showTooltip("25 Lamports for Share")}
            // onMouseLeave={hideTooltip}
          >
            Share
          </PostShareButton>
          <PostShareExternallyButton>
            Share Externally
          </PostShareExternallyButton>
           </Flexer>
      </Post>
    </Container>
  );
};

export default AppUnAuthM;

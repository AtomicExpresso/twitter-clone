//Profile info is stored here
import verified from '../../assets/icons/verified_badge.svg';

import pfpOne from '../../assets/pfp.png';
import pfpTwo from '../../assets/pfpTwo.jpeg';
import pfpThree from '../../assets/pfpThree.jpg';
import pfpFour from '../../assets/pfpFour.png';
import pfpFive from '../../assets/pfpFive.png';

const symbol = '@';

const ProfileOne = {
  ProfilePic: pfpTwo,
  ProfileBadge: verified,
  ProfileUserName: `${symbol}bob123`,
  ProfileRealName: "Bob",
  ProfileBio: "Hi idk what to put here",
  ProfileFollowingCount: "276",
  ProfileFollowersCount: "103"
}

const ProfileTwo = {
  ProfilePic: pfpThree,
  ProfileBadge: null,
  ProfileUserName: `${symbol}throwaway6382`,
  ProfileRealName: "Some dude",
  ProfileBio: "Capybara supremecey",
  ProfileFollowingCount: "1.5k",
  ProfileFollowersCount: "5.7k"
}

const ProfileThree = {
  ProfilePic: pfpFour,
  ProfileBadge: null,
  ProfileUserName: `${symbol}somedude781`,
  ProfileRealName: "Kyle Morgan",
  ProfileBio: "LOL",
  ProfileFollowingCount: "3.8k",
  ProfileFollowersCount: "819.4k"
}

const ProfileFour = {
  ProfilePic: pfpFive,
  ProfileUserName: `${symbol}smith808`,
  ProfileRealName: "Beth Smith",
  ProfileBio: "Hamburger",
  ProfileFollowingCount: "2",
  ProfileFollowersCount: "14"
}

export { ProfileOne, ProfileTwo, ProfileThree, ProfileFour }
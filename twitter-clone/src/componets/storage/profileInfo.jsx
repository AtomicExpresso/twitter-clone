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
  ProfileBio: "Hi idk what to put here"
}

const ProfileTwo = {
  ProfilePic: pfpThree,
  ProfileUserName: `${symbol}throwaway6382`,
  ProfileRealName: "Some dude",
  ProfileBio: "Capybara supremecey"
}

const ProfileThree = {
  ProfilePic: pfpFour,
  ProfileUserName: `${symbol}somedude781`,
  ProfileRealName: "Kyle Morgan",
  ProfileBio: "LOL"
}

const ProfileFour = {
  ProfilePic: pfpFive,
  ProfileUserName: `${symbol}smith808`,
  ProfileRealName: "Beth Smith",
  ProfileBio: "Hamburger"
}

export { ProfileOne, ProfileTwo, ProfileThree, ProfileFour }
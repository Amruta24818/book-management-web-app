export const getUrlFromString = (page: string): string => {
  switch (page) {
    case "Profile":
      return "profile";
    case "Logout":
      return "home";
    case "Change Password":
      return "edit-password";
    default:
      return "home";
  }
};

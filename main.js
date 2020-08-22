const github = new Github();
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const queryTxt = e.target.value;
  // if(queryTxt)
  // if (queryTxt === "") ui.deleteProfile();
  let ui = new UI();
  if (queryTxt !== "") {
    github.getUser(queryTxt).then((data) => {
      if (data.profile.message === "Not Found") {
        console.log("such user doesn't exist");
        ui.showMessage(
          "such user doesn't exist",
          "alert alert-danger text-center"
        );
        ui.deleteProfile();
      } else {
        console.log(data.repos);
        ui.showProfile(data.profile);
        // console.log(data);
        ui.showRepos(data.repos);
      }
    });
  } else {
    if (ui.shownProfile()) ui.deleteProfile();
    else if (ui.shownMessage()) ui.deleteMessage();
  }
});

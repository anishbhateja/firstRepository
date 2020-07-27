module.exports.profile = function (req, res) {
  //exporting the action home controller
  return res.render("user_profile", {
    title: "Profile Page",
  });
};

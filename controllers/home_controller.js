module.exports.home = function (req, res) {
  //exporting the action home controller
  return res.render("home", {
    title: "Home",
  });
};

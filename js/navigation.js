document.write("  <div class=\"id_name2\">");
document.write("    <div id=\"mySidenav\" class=\"sidenav\">");
document.write("      <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;<\/a>");
document.write("      <a href=\"\/\">首页<\/a>");
document.write("      <a href=\"\/doc\">文档<\/a>");
document.write("      <a href=\"\/music\">音乐<\/a>");
document.write("      <a href=\"#\">关于<\/a>");
document.write("    <\/div>");
document.write("    <div style=\"background-color:#CE0E28;height:64px;\">");
document.write("      <span style=\"font-size:30px;color:#FF7A48;position:relative;left:18px;top:11px;cursor:pointer\" onclick=\"openNav()\">&#9776;<\/span>");
document.write("      <a href=\"\/\"><img src=\"https:\/\/sudsier.gitee.io\/webimg\/icon.png\" width=\"200px\" height=\"44p\" style=\"position:absolute;left:92px;top:10px\"><\/a>");
document.write("    <\/div>");
document.write("  <img src=\"https:\/\/sudsier.gitee.io\/webimg\/small_title.jpg\" width=\"100%\">");
document.write("  <\/div>");
document.write("  <div class=\"id_name\">");
document.write("    <div class=\"topnav\">");
document.write("      <img src=\"https:\/\/s1.ax1x.com\/2020\/06\/25\/NDiHYD.md.png\" width=\"160px\" style=\"float: left;padding: 7px 14px 0 14px;\"><a class=\"active\" href=\"\/\">首页<\/a>");
document.write("      <a href=\"\/doc\">文档<\/a>");
document.write("      <a href=\"\/music\">音乐<\/a>");
document.write("      <a href=\"#about\">关于<\/a>");
document.write("    <\/div>");
document.write("  <img src=\"https:\/\/sudsier.gitee.io\/webimg\/large_title.jpg\" width=\"100%\">");
document.write("<\/div>");
/* 将侧导航的宽度设置为250px，页面内容的左边距设置为250px，并在正文中添加黑色背景色 */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
/* 将侧导航的宽度设置为0，将页面内容的左边距设置为0，将正文的背景色设置为白色 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function s_language(targ, selObj, restore) {
  eval(targ + ".location='" + selObj.options[selObj.selectedIndex].value + "'");
  if (restore) selObj.selectedIndex = 0;
}
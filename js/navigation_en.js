document.write("<!--导航条-->");
document.write("  <div class=\"id_name2\">");
document.write("    <div id=\"mySidenav\" class=\"sidenav\">");
document.write("      <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">&times;<\/a>");
document.write("      <a href=\"\/\">Home<\/a>");
document.write("      <a href=\"\/doc\">File<\/a>");
document.write("      <a href=\"\/music\">Music<\/a>");
document.write("    <\/div>");
document.write("    <div style=\"background-color:#202020;height:64px;\">");
document.write("      <span style=\"font-size:30px;color:#4CAF50;position:relative;left:18px;top:11px;cursor:pointer\" onclick=\"openNav()\">&#9776;<\/span>");
document.write("      <a href=\"\/\"><img src=\"https:\/\/sudsier.gitee.io\/webimg\/icon.png\" width=\"200px\" height=\"44p\" style=\"position:absolute;left:92px;top:10px\"><\/a>");
document.write("    <\/div>");
document.write("  <\/div>");
document.write("  <div class=\"id_name\">");
document.write("    <div style=\"background-color:#202020;text-align:center\">");
document.write("    <img src=\"https:\/\/s1.ax1x.com\/2020\/06\/25\/NDiHYD.md.png\" width=\"200px\" height=\"44px\"><\/div>");
document.write("    <div class=\"topnav\">");
document.write("      <a class=\"active\" href=\"\/\">Home<\/a>");
document.write("      <a href=\"\/doc\">File<\/a>");
document.write("      <a href=\"\/music\">Music<\/a>");
document.write("    <\/div>");
document.write("<\/div>");
document.write("<div class=\"frame\">")
document.write("  <img src=\"\/\/sudsier.gitee.io\/webimg\/language_icon.png\" height=\"40px\" style=\"vertical-align:middle;\" alt=\"icon.png\">This website is available in the following languages:<select name=\"language\" id=\"language\" onchange=\"s_language('parent',this,0)\">");
document.write("      <option value=\"index.html\">简体中文<\/option>");
document.write("      <option value=\"en.html\" selected>English<\/option> ");
document.write("    <\/select>");
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
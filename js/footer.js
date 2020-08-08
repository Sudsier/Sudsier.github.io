document.write("<div>");
document.write("    <div class=\"footer_1\">");
document.write("      <div style=\"font-size:30px;color:#fafafa\">Sudsier<\/div>");
document.write("      <hr style=\"background-color:#fafafa;height:1px;border:none;\">");
document.write("      <a rel=\"license\" href=\"http:\/\/creativecommons.org\/licenses\/by-nc-nd\/4.0\/\"><img alt=\"知识共享许可协议\" style=\"border-width:0\" src=\"https:\/\/licensebuttons.net\/l\/by-nc-nd\/4.0\/80x15.png\" \/><\/a>除非另有声明，本网站内容采用<span rel=\"license\" href=\"http:\/\/creativecommons.org\/licenses\/by-nc-nd\/4.0\/\" style=\"color:#b1b1b1;\">CC BY-NC-ND 4.0 国际许可协议<\/span>授权。");
document.write("    <\/div>");
document.write("    <div class=\"footer_2\">Copyright © 2020-<span id=\"copyright\"><\/span> Sudsier All rights reserved.<br>Sudsier信息组负责维护本网站<\/div>");
document.write("<\/div>");
//版权年份
var d = new Date();
document.getElementById("copyright").innerHTML = d.getFullYear();
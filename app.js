const site = window.location.hostname;

//alert("Success at " + site + " yeyy");

const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css;

function Create_Custom_Element(tag, attr_tag, attr_name, value) {
    const custom_element = document.createElement(tag);
    custom_element.setAttribute(attr_tag, attr_name);
    custom_element.innerHTML = value;
    document.body.append(custom_element);
}

if (site.includes("brutal.fandom.com")) {
    Add_Custom_Style(`
        #wd-menu {
            font-size: 14px;
            padding: 150px 0;
            color: white !important;
            background-color: #636363;
            position: fixed;
            top: 0;
            right:0;
            text-align: center;
            width: auto;
            z-index: 999999;
            height:auto;
            padding:20px;
            margin-top:10%;
            text-decoration: none !important;
            border-radius:10px;
            margin-right:10px;
        }
          
        .wd-btn {
          display: block;
          margin-bottom: 5px;
          padding: 10px;
          border-radius: 5px;
          background-color: white;
          color: black;
          text-decoration: none !important;
          font-size: 14px;
          transition: 0.25s;
          width:100px;
        }

        .wd-btn:hover {
          background-color: #ddd;
          color: black;

        }

        .wd-btn a:hover {          
          text-decoration: none;
        }

        ::-webkit-scrollbar {
          display: none;
          }

        .wd-btn:first-child {
          margin-top: 5px;

        }
    `);

    Create_Custom_Element(
      "div",
      "id",
      "wd-menu",
      "<a href'https://brutal.fandom.com/wiki/Brutal_Wiki' class='wd-btn'>Home</a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Character_Box' class='wd-btn'>T Boxes</a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Character_Navbox' class='wd-btn'>T Navbox</a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Fraksi_Navbox' class='wd-btn'>Fraksi</a>" +
      "<a href='https://brutal.fandom.com/wiki/MediaWiki:Common.css' class='wd-btn'>CSS</a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Fraksi_Navbox' class='wd-btn'>Fraksi</a>" +
      "<a href='https://brutal.fandom.com/wiki/MediaWiki:Wiki-navigation' class='wd-btn'>Navigation</a>" +
      "<br/><b>Tools</b>" +
      "<a href='?action=edit' class='wd-btn'>Edit</a>" +
      "<a href='javascript:history.go(-1)'  class='wd-btn'>Back</a>"
    );
}

if (site.includes("minecraftid.fandom.com")) {
    Add_Custom_Style(`
        #wd-menu {
            font-size: 60px;
            padding: 150px 0;
            color: #ff0037 !important;
            background-color: #fffffff2;
            position: fixed;
            top: 0;
            right:0;
            text-align: center;
            width: auto;
            z-index: 999999;
            height:50%;
            padding:20px;
            margin-top:10%;
            text-decoration: none !important;
        }
          
        .wd-btn {
          display: block;
          margin-bottom: 5px;
          padding: 10px;
          border-radius: 5px;
          background-color: black;
          color: white;
          text-decoration: none !important;
          font-size: 14px;
          transition: 1s;
          width:100px;
        }

        .wd-btn:hover {
          background-color: #737373;
          color: white;

        }

        .wd-btn a:hover {          
          text-decoration: none;
        }

        ::-webkit-scrollbar {
          display: none;
          }

        .wd-btn:first-child {
          margin-top: 5px;

        }
    `);

    Create_Custom_Element(
      "div",
      "id",
      "wd-menu",
      "<a href='https://minecraftid.fandom.com/id/wiki/MediaWiki:Common.css?action=edit' class='wd-btn'>CSS</a>" +
      "<a href='https://minecraftid.fandom.com/id/wiki/MediaWiki:Wiki-navigation' class='wd-btn'>Navigation</a>"
    );
}
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
        @import url('https://cdn-uicons.flaticon.com/2.2.0/uicons-solid-rounded/css/uicons-solid-rounded.css');
        @import url('https://cdn-uicons.flaticon.com/2.2.0/uicons-solid-rounded/css/uicons-solid-rounded.css');
        @import url('https://cdn-uicons.flaticon.com/2.2.0/uicons-solid-straight/css/uicons-solid-straight.css');

        #wd-menu {
            color: white !important;
            background-color: white;
            position: fixed;
            top: 0;
            right:0;
            text-align: center;
            width: auto;
            z-index: 999999;
            height:auto;
            padding:5px;
            margin-top:10%;
            text-decoration: none !important;
            border-radius:10px;
            margin-right:10px;      

            -webkit-box-shadow: 0px 0px 18px -4px rgba(0,0,0,0.48);
            -moz-box-shadow: 0px 0px 18px -4px rgba(0,0,0,0.48);
            box-shadow: 0px 0px 18px -4px rgb(0 0 0);
            color: white !imporant;
        }
          
        .wd-btn {
          display: block;
          padding: 10px 10px 1px 10px;
          border-radius: 5px;
          background-color: white;
          color: black;
          text-decoration: none !important;
          font-size: 25px;
          transition: 0.25s;
          width: 59px;
          height: 59px;
          display: flex;
          align-items: center;
          justify-content: center;    
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
      "<a href='https://brutal.fandom.com/wiki/Brutal_Wiki' class='wd-btn'><i class='fi fi-sr-home'></i></a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Character_Box' class='wd-btn'><i class='fi fi-sr-square-1'></i></a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Character_Navbox' class='wd-btn'><i class='fi fi-sr-square-2'></i></a>" +
      "<a href='https://brutal.fandom.com/wiki/Template:Fraksi_Navbox' class='wd-btn'><i class='fi fi-ss-user'></i></a>" +
      "<a href='https://brutal.fandom.com/wiki/MediaWiki:Common.css' class='wd-btn'><i class='fi fi-sr-flower'></i></a>" +
      "<a href='https://brutal.fandom.com/wiki/MediaWiki:Wiki-navigation' class='wd-btn'><i class='fi fi-sr-apps'></i></a><br/>" +
      "<a href='?action=edit' class='wd-btn'><i class='fi fi-sr-pen-clip'></i></a>" +
      "<a href='javascript:history.go(-1)'  class='wd-btn'><i class='fi fi-sr-angle-square-left'></i></a>"
    );
}

if (site.includes("minecraftid.fandom.com")) {
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
    @import url('https://cdn-uicons.flaticon.com/2.2.0/uicons-solid-rounded/css/uicons-solid-rounded.css');
    @import url('https://cdn-uicons.flaticon.com/2.2.0/uicons-solid-rounded/css/uicons-solid-rounded.css');
    @import url('https://cdn-uicons.flaticon.com/2.2.0/uicons-solid-straight/css/uicons-solid-straight.css');

    #wd-menu {
        color: white !important;
        background-color: white;
        position: fixed;
        top: 0;
        right:0;
        text-align: center;
        width: auto;
        z-index: 999999;
        height:auto;
        padding:5px;
        margin-top:10%;
        text-decoration: none !important;
        border-radius:10px;
        margin-right:10px;      

        -webkit-box-shadow: 0px 0px 18px -4px rgba(0,0,0,0.48);
        -moz-box-shadow: 0px 0px 18px -4px rgba(0,0,0,0.48);
        box-shadow: 0px 0px 18px -4px rgb(0 0 0);
        color: white !imporant;
    }
      
    .wd-btn {
      display: block;
      padding: 10px 10px 1px 10px;
      border-radius: 5px;
      background-color: white;
      color: black;
      text-decoration: none !important;
      font-size: 25px;
      transition: 0.25s;
      width: 59px;
      height: 59px;
      display: flex;
      align-items: center;
      justify-content: center;    
    }

        .wd-btn:hover {
          background-color: #ddd;
          color: black;
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
      "<a href='https://minecraftid.fandom.com/id/wiki/Minecraft_Indonesia_Wiki' class='wd-btn'>Home</a>" +
      "<a href='https://minecraftid.fandom.com/id/wiki/MediaWiki:Common.css' class='wd-btn'>CSS</a>" +
      "<a href='https://minecraftid.fandom.com/id/wiki/MediaWiki:Wiki-navigation' class='wd-btn'>Navigation</a>" +
      "<br/><b>Tools</b>" +
      "<a href='?action=edit' class='wd-btn'>Edit</a>" +
      "<a href='javascript:history.go(-1)'  class='wd-btn'>Back</a>" 
    );
}

if (site.includes("youtube.com")) {
  Add_Custom_Style(`
    @import url(“https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css”);

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
        padding:10px;
        margin-top:10%;
        text-decoration: none !important;
        border-radius:10px;
        margin-right:10px;
    }
      
    .wd-btn {
      display: inline-block;
      margin: 0 5px 5px 5px;
      padding: 10px;
      border-radius: 5px;
      background-color: white;
      color: black;
      text-decoration: none !important;
      font-size: 14px;
      transition: 0.25s;
      width:100px;
      float: left;
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

    .fa {
      padding: 20px;
      font-size: 30px;
      width: 50px;
  `);

  Create_Custom_Element(
    "div",
    "id",
    "wd-menu",
    "<a href='https://www.twitter.com/' class='wd-btn'>Twitter</a><a href='https://www.youtube.com/' class='wd-btn'>Youtube</a><br/>" +
    "<a href='https://www.instagram.com/' class='wd-btn'>Instagram</a><a href='https://open.spotify.com/' class='wd-btn'>Spotify</a>"
  );
      "<a href='https://minecraftid.fandom.com/id/wiki/Minecraft_Indonesia_Wiki' class='wd-btn'><i class='fi fi-sr-home'></i></a>" +
      "<a href='https://minecraftid.fandom.com/wiki/MediaWiki:Common.css' class='wd-btn'><i class='fi fi-sr-flower'></i></a>" +
      "<a href='https://minecraftid.fandom.com/wiki/MediaWiki:Wiki-navigation' class='wd-btn'><i class='fi fi-sr-apps'></i></a><br/>" +
      "<a href='?action=edit' class='wd-btn'><i class='fi fi-sr-pen-clip'></i></a>" +
      "<a href='javascript:history.go(-1)'  class='wd-btn'><i class='fi fi-sr-angle-square-left'></i></a>"
    );
}

if (site.includes("twitter.com") || site.includes("youtube.com") || site.includes("instagram.com") || site.includes("open.spotify.com") || site.includes("web.whatsapp.com") || site.includes("docs.google.com")) {
  Add_Custom_Style(`
    @import url('https://cdn-uicons.flaticon.com/2.2.0/uicons-brands/css/uicons-brands.css');
    @import url('https://cdn-uicons.flaticon.com/2.2.0/uicons-solid-straight/css/uicons-solid-straight.css');

    .wd-menu {
      font-size: 14px;
      padding: 150px 0;
      background-color: white !important;
      position: fixed;
      bottom: 0;
      right: 0;
      text-align: center;
      width: auto;
      z-index: 999999;
      height: auto;
      padding: 10px;
      margin-bottom: 20px;
      margin-right: 20px;
      text-decoration: none !important;
      border-radius: 10px;

      -webkit-box-shadow: 0px 0px 18px -4px rgba(0,0,0,0.48);
      -moz-box-shadow: 0px 0px 18px -4px rgba(0,0,0,0.48);
      box-shadow: 0px 0px 18px -4px rgb(0 0 0);
      color: white !imporant;
  }
      
    .wd-btn {
      margin: 0 5px 5px 5px;
      padding: 10px 10px 1px 10px;
      border-radius: 5px;
      background-color: black;
      color: white !imporant;
      text-decoration: none !important;
      font-size: 35px;
      transition: 0.25s;
      width: 50px;
      height: 59px;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .wd-btn:first-child,    
    .wd-btn:nth-child(2),    
    .wd-btn:nth-child(3) {      
      margin: 0 5px 10px 5px;
    }

    .yt {
      background-color: #ff0000;
    }
    .tw {
      background-color: #1DA1F2;
    }
    .ig {
      background-color: #ff26d0;
    }
    .sp {
      background-color: #1ed760;
    }
    .wa {
      background-color: #075e54;
    }
    .db {
      background-color: #451093;
    }

    .wd-menu a {      
      color: white !important;
    }

    .wd-btn:hover {
      background-color: black !important;

      -webkit-box-shadow: inset 0px 0px 18px -4px rgba(0,0,0,0.48);
      -moz-box-shadow: inset 0px 0px 18px -4px rgba(0,0,0,0.48);
      box-shadow: inset 0px 0px 18px -4px rgba(0,0,0,0.25);

    }

    .wd-btn a:hover {          
      text-decoration: none;
    }

    ::-webkit-scrollbar {
      display: none;
      }
  `);

  Create_Custom_Element(
    "div",
    "class",
    "wd-menu",
    "<a href='https://www.web.whatsapp.com/' class='wd-btn wa'><i class='fi fi-brands-whatsapp'></i></a><a href='https://www.twitter.com/' class='wd-btn tw'><i class='fi fi-brands-twitter'></i></a><a href='https://www.youtube.com/' class='wd-btn yt'><i class='fi fi-brands-youtube'></i></a><br/>" +
    "<a href='https://www.instagram.com/' class='wd-btn ig'><i class='fi fi-brands-instagram'></i></a><a href='https://open.spotify.com/' class='wd-btn sp'><i class='fi fi-brands-spotify'></i></a><a href='https://docs.google.com/spreadsheets/d/1CQxjCqZfpKweMXzB-y2eAppmCJSwQHLgD1QSI-L_4tM/edit?usp=sharing' class='wd-btn db'><i class='fi fi-ss-database'></i></a>"
  );
}
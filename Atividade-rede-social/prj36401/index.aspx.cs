using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace prj36401
{
    public partial class index : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {
            string usrIMG = "";
            string usrName = "";
            string usrNick = "";

            // Fake Friends //

            string[] Friends = new string[8] {"@TommyInnit", "@Fabio", "@Erick", "@nicknelson", "@Fernando", "@Freddy", "@Notch", "@dreamWasTaken"};

            string[] Images = new string[8] {
                "https://pbs.twimg.com/media/FMtEKsYXMAI8Oy_?format=jpg&name=small",
                "https://img.utdstc.com/icon/250/7d0/2507d09441962a388e004cff7ef745db47b43d9ff42a248327da95116bfcc381:200",
                "https://pbs.twimg.com/profile_images/1514653889609584652/D5OwnZXD_400x400.jpg", 
                "https://64.media.tumblr.com/48f2100c2097d94ac5360a6be0688455/3ba2cae82813eaa1-6a/s1280x1920/a64235cd1472478271ddc50bce102619fd13d011.jpg", 
                "https://pbs.twimg.com/profile_images/1381331706871959557/zz255Cru_400x400.jpg",
                "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg", 
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Notch_receives_the_Pioneer_Award_at_GDC_2016_%28cropped%29.jpg/1200px-Notch_receives_the_Pioneer_Award_at_GDC_2016_%28cropped%29.jpg", 
                "https://pbs.twimg.com/profile_images/1514653889609584652/D5OwnZXD_400x400.jpg" };

            if (Request["uid"] == null)
            {
                Response.Redirect("pagina-inexistente.aspx");
            }  
            else if (Request["uid"] == "")
            {
                Response.Redirect("pagina-inexistente.aspx");
            }
            else
            {
                Request["uid"].ToLower();
            }
           
            switch (Request["uid"])
            {
                case "tommyinnit":
                    usrIMG = "https://pbs.twimg.com/profile_banners/1032978119370723329/1614090971/600x200";
                    usrName = "Tommy Innit";
                    usrNick = "TommyInnit";

                    litUsrIMG.Text = $"<img class='usrImage' src='{usrIMG}' />";
                    litUsrData.Text = $"<h2 >{usrName}</h2> <h3>({usrNick})</h3> <p> Editar perfil </p><div><p> 12M Seguidores </p><p> 463K Seguindo </p> ";

                    litUsrFriends.Text =
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[5]}'/><h3>{Friends[3]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[1]}'/><h3>{Friends[7]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[3]}'/><h3>{Friends[4]}</h3></div>";

                    litSugFriends.Text =
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[4]}'/><h3>{Friends[1]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[0]}'/><h3>{Friends[2]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[2]}'/><h3>{Friends[6]}</h3></div>";

                    imgBanner.ImageUrl = "https://pbs.twimg.com/profile_banners/2455740283/1601560191/600x200";

                    litNome.Text = usrName;
                    litAP.Text = "Golden Retrivier";
                    litCF.Text = "Café";
                    litDT.Text = "30/12/2004";
                    litH.Text = "jogar bola";
                    litOS.Text = "heterosexual";
                    litPR.Text = "autonomo(a)";


                    break;

                   
                    

                case "fundylive":               
                    //usuario
                    usrIMG = "https://pbs.twimg.com/profile_images/1379959726881005579/vLxfcnQL_400x400.jpg";
                    usrName = "Its Fundy";
                    usrNick = "fundylive";

                    
                    litUsrIMG.Text = $"<img class='usrImage' src='{usrIMG}' />";
                    litUsrData.Text = $"<h2 >{usrName}</h2> <h3>({usrNick})</h3> <p> Editar perfil </p><div><p> 23M Seguidores </p><p> 3K Seguindo </p> ";

                    //amigos
                    litUsrFriends.Text =
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[2]}'/><h3>{Friends[0]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[1]}'/><h3>{Friends[5]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[4]}'/><h3>{Friends[2]}</h3></div>";

                    litSugFriends.Text =
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[6]}'/><h3>{Friends[4]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[7]}'/><h3>{Friends[3]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[3]}'/><h3>{Friends[1]}</h3></div>";

                    imgBanner.ImageUrl = "https://pbs.twimg.com/profile_banners/1164536481567973376/1598940901/600x200";

                    litNome.Text = usrName;
                    litAP.Text = "Papagaio";
                    litCF.Text = "Chá gelado";
                    litDT.Text = "10/2/1996";
                    litH.Text = "Lazer";
                    litOS.Text = "heterosexual";
                    litPR.Text = "programador(a)";


                    break;

                case "mrbeast":
                    //usuario
                    usrIMG = "https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg";
                    usrName = "Mr beast";
                    usrNick = "mrbeast";

                    litUsrIMG.Text = $"<img class='usrImage' src='{usrIMG}' />";
                    litUsrData.Text = $"<h2 >{usrName}</h2> <h3>({usrNick})</h3> <p> Editar perfil </p><div><p> 2M Seguidores </p><p> 100 Seguindo </p> ";

                    //amigos
                    litUsrFriends.Text =
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[5]}'/><h3>{Friends[3]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[1]}'/><h3>{Friends[7]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[3]}'/><h3>{Friends[4]}</h3></div>";

                    litSugFriends.Text =
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[4]}'/><h3>{Friends[1]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[0]}'/><h3>{Friends[2]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[2]}'/><h3>{Friends[6]}</h3></div>";

                    imgBanner.ImageUrl = "https://pbs.twimg.com/profile_banners/2455740283/1601560191/600x200";

                    litNome.Text = usrName;
                    litAP.Text = "Gatos";
                    litCF.Text = "Videogame";
                    litDT.Text = "10/07/1991";
                    litH.Text = "Criar jogos";
                    litOS.Text = "bisexual";
                    litPR.Text = "Filantropo(a)";

                    break;

                case "nick":
                    //usuario
                    usrIMG = "https://64.media.tumblr.com/48f2100c2097d94ac5360a6be0688455/3ba2cae82813eaa1-6a/s1280x1920/a64235cd1472478271ddc50bce102619fd13d011.jpg";
                    usrName = "Nick Nelson";
                    usrNick = "nicknelson";

                    litUsrIMG.Text = $"<img class='usrImage' src='{usrIMG}' />";
                    litUsrData.Text = $"<h2 >{usrName}</h2> <h3>({usrNick})</h3> <p> Editar perfil </p><div><p> 12K Seguidores </p><p> 66K Seguindo </p> ";

                    //amigos
                    litUsrFriends.Text =
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[5]}'/><h3>{Friends[1]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[1]}'/><h3>{Friends[7]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[3]}'/><h3>{Friends[4]}</h3></div>";

                    litSugFriends.Text =
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[4]}'/><h3>{Friends[2]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[0]}'/><h3>{Friends[5]}</h3></div>" +
                        $"<div class='amigos'><img class='usrImage amigoImage' src='{Images[2]}'/><h3>{Friends[6]}</h3></div>";
                    
                    imgBanner.ImageUrl = "https://pbs.twimg.com/profile_banners/1421092744810967045/1650353204/600x200";

                    litNome.Text = usrName;
                    litAP.Text = "Golden Retriver";
                    litCF.Text = "Charlie Spring (minha coisinha fofa)";
                    litDT.Text = "22/08/2005";
                    litH.Text = "Rugbi";
                    litOS.Text = "bisexual";
                    litPR.Text = "Estudante";

                    break;

                default:

                    Response.Redirect("pagina-inexistente.aspx");

                    break;
            }

        }
    }
}
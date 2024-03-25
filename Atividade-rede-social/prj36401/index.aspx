<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="prj36401.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <link href="css/styles.css" rel="stylesheet" />
    <link href="css/mediaqueries.css" rel="stylesheet" />
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <header>
        <img id="ico" src="https://logodownload.org/wp-content/uploads/2014/09/orkut-logo.png"/></header>
        <main>          
                    <nav id="perfilMenu"> 
                    <asp:Literal ID="litUsrIMG" runat="server"><img class="usrImage" src="https://lastfm.freetls.fastly.net/i/u/770x0/7565eade61f75b69c7aabd1d6c6d97b7.jpg" /></asp:Literal>
                    <asp:Literal ID="litUsrData" runat="server">
                        <h2 >Wilbur</h2>
                        <h3>(Wilbur Soot)</h3>
                        <p>Editar perfil</p>
                        <div>
                            <p> 10M Seguidores</p>
                            <p> 400K Seguindo</p>
                        </div>
                    </asp:Literal>
                </nav>
            
            <section>
                       <div class="centerMenu">
                           <asp:Image ID="imgBanner" CssClass="banner" runat="server" />
                                <h2 id="usrMenu">
                                    <asp:Literal ID="litNome" runat="server">Nome</asp:Literal></h2>
                                <table>
                                    <tr class="corsim">
                                        <td>Data de nascimento:</td>
                                        <td><asp:Literal ID="litDT" runat="server">00/00/0000</asp:Literal></td>
                                    </tr>
                                    <tr class="cornao">
                                        <td>Profissão:</td>
                                        <td><asp:Literal ID="litPR" runat="server">null</asp:Literal></td>
                                    </tr>
                                    <tr class="corsim">
                                        <td>Orientação Sexual:</td>
                                        <td><asp:Literal ID="litOS" runat="server">null</asp:Literal></td>
                                    </tr>
                                    <tr class="cornao">
                                        <td>Coisa favorita:</td>
                                        <td><asp:Literal ID="litCF" runat="server">null</asp:Literal></td>
                                    </tr>
                                    <tr class="corsim">
                                        <td>Hobbie:</td>
                                        <td><asp:Literal ID="litH" runat="server">null</asp:Literal></td>
                                    </tr>
                                    <tr class="cornao">
                                        <td>Animal Preferido:</td>
                                        <td><asp:Literal ID="litAP" runat="server">null</asp:Literal></td>
                                    </tr>
                                </table>
                        </div>
            </section>

            <nav id="sideMenu">
                <h4>Amigos</h4>
                <hr size="2"/>

                <asp:Literal ID="litUsrFriends" runat="server">
                        <div class="amigos">
                        <img class="usrImage amigoImage" src="https://pbs.twimg.com/profile_images/1223403686174625794/eRAObFzC_400x400.jpg" />
                        <h3>@TommyInnit</h3> 
                    </div>
                    <div class="amigos">
                        <img class="usrImage amigoImage" src="https://pbs.twimg.com/profile_images/1514653889609584652/D5OwnZXD_400x400.jpg" />
                        <h3>@DreamWasTaken</h3> 
                    </div>
                    <div class="amigos">
                        <img class="usrImage amigoImage" src="https://pbs.twimg.com/profile_images/1381331706871959557/zz255Cru_400x400.jpg" />
                        <h3>@KarlJacobs_</h3> 
                    </div>
                    <div class="amigos">
                        <img class="usrImage amigoImage" src="https://pbs.twimg.com/profile_images/994592419705274369/RLplF55e_400x400.jpg" />
                        <h3>@MrBeast</h3> 
                    </div>
                 </asp:Literal>

                <h4>Amigos sugeridos</h4>
                <hr size="2"/>
                
                <asp:Literal ID="litSugFriends" runat="server"></asp:Literal>
            </nav>
        </main>
    </form>
</body>
</html>

import { describe, expect, it } from "@jest/globals";
import { GameInfo, parseEvents } from "./parseEvents";

describe('parseEvents', () => {
    it('will return a list of events', () => {
        const expected: GameInfo[] = [
            {
                startTime: new Date('2024-06-03T19:30:00.000-05:00'),
                jerseyColor: "Neon Orange",
                fieldName: "Northstar 4",
                fieldMapUrl: "https://goo.gl/maps/xWCzTDbCUM8bFcUC6",
                opponentColor: "Cardinal",
                opponentName: "Presenting the UN delegation from Flavor Town (2-0)"
            },
            {
                startTime: new Date('2024-06-05T19:30:00.000-05:00'),
                jerseyColor: "Neon Orange",
                fieldName: "Northstar 4",
                fieldMapUrl: "https://goo.gl/maps/xWCzTDbCUM8bFcUC6",
                opponentColor: "Carolina Blue",
                opponentName: "Wednesday Team Name (1-0)"
            }
        ]
        expect(parseEvents(html)[0]).toEqual(expected[0]);
        expect(parseEvents(html)[1]).toEqual(expected[1]);
    });
});

const html = `
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>    
    <!-- Required meta tags always come first -->
    <meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /><meta http-equiv="x-ua-compatible" content="ie=edge" /><title>
	
    
    Team


</title>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
    <!-- Bootstrap core CSS -->
    <link id="lkBootstrap" rel="stylesheet" href="/Includes/css/bootstrap.min.css" />
    <!-- Material Design Bootstrap -->
    <link id="lkMdb" rel="stylesheet" href="/Includes/css/mdb.css" /><link id="lkUlti" rel="stylesheet" href="/Includes/css/UltiZone.css?v=13" />

    <style>
        .email-checkboxes label{
            font-weight: bold;
            padding-left: 2px;
            margin-bottom: 0 !important;
            padding-top: 5px;
        }

        .checkbox_inline label
        {
            display:inline;
            padding-left: 5px;
        }

        .rbText
        {
            display: inline !important;
        }

        .RadRadioButton{
            text-align: left;
        }

        .news-container {
            position: relative;
            background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=0 ); /* IE6-9 */
            height: 120px;
        }

        .news-bg {
           position: absolute;
           top: 0;
           left: 0;
           bottom: 0;
           right: 0;
           z-index: -1;
           overflow: hidden;
        }

        .news-readmore {
            position: absolute;
            width:100%;
            bottom:0;
            text-align:center;
        }
        
        .news-readmore:hover {
            text-decoration: underline;
        }
    </style>

    
    

<link href="/WebResource.axd?d=urCACUaUZeT6oPoIZXShbsYXb3E1cIy4UDap3Uqn9crZHACKZqAt7E2Rt3ULr4e80APtj4TgS-1piUEBXzffedpolfzawtWFoRlVGtN_c-42Ivz-0&amp;t=638492581850462122" type="text/css" rel="stylesheet" class="Telerik_stylesheet" /><link href="/WebResource.axd?d=aupLorz3w8A80OJEEKIwoI3l0hPxqrUOAs1XebBajgx6LJotJze_AayWTND4wpdT6r6bO5rUlRpjYWUxlK9WGONOsZXJ2w8NbKP4rodjLBCShpIxzOI6NowDBv3fPmEE93VpUQ2&amp;t=638492581802023068" type="text/css" rel="stylesheet" class="Telerik_stylesheet" /><link href="/WebResource.axd?d=20hJFSY0zhL663XKQtyuk8TvviwCp-fXcs2E_v2A96Gqk0Ci7fgb4Tuz6uHPoav2mIOC2qp39b45Py6xzhSGgt5MdsUWVw8munjrtPAAzpkzgjwRYjSyTSPyonZ43XADvObuUw2&amp;t=638492581850462122" type="text/css" rel="stylesheet" class="Telerik_stylesheet" /><link href="/WebResource.axd?d=VdPoLqp1pEU6N0-IfFplZEMZN1RbfnNwx9i8PH6XT3A69wyVURD2iTJPmu1aI-U1_im0BV7WG9aQ8-NE06nGU0JwpfO-nACPPHOQeBPNefVw4eIdNvsYC5FoeaZFU7zqvid1Cw2&amp;t=638492581850462122" type="text/css" rel="stylesheet" class="Telerik_stylesheet" /><link href="/WebResource.axd?d=6d0ORl_GDQ8il0vfaye5YTmd0uDvHK1pittgzSJ9_pHaVCH-zN7l0jdLcaKCrtdMe5TVt3nkl4_3018ta25_DADwf6b2_ir3qx_ruM1ahCBlXCVdiaBrKBc6vqxEiwlBttkkyw2&amp;t=638492581850462122" type="text/css" rel="stylesheet" class="Telerik_stylesheet" /><link href="/WebResource.axd?d=MdXEAQktXF5LnI0JAc7GQQo2yRVpWZZr2g0wL2-UqqQLexIryE3anBgkvZR0azGmCSalUnNwu63KZfkqF6ryP1rO8msc3nE7tHRGef1DrncTRhw0eSqswOSG5WIhR8o01HP89g2&amp;t=638492581850462122" type="text/css" rel="stylesheet" class="Telerik_stylesheet" /><link href="/WebResource.axd?d=ndE8XS8mJpm4e06NULYO5iO2lvZCwJsSBNGyfT0jZYvyfK3I0f3v30YLy8x3DP2Wh40dPu8-I_vNsRr5ydw96LDcJNwLX5KY4gdKFUfVEC9-9kmiTvj-H8y2HrhZhYz8JLZokzu_QD1xIhlvzM0o_HM77js1&amp;t=638492581802023068" type="text/css" rel="stylesheet" class="Telerik_stylesheet" /></head>
<body>
    <form method="post" action="./Team.aspx?t=5634&amp;d=447" id="form1">
<div class="aspNetHidden">
<input type="hidden" name="RadScriptManager1_TSM" id="RadScriptManager1_TSM" value="" />
<input type="hidden" name="__EVENTTARGET" id="__EVENTTARGET" value="" />
<input type="hidden" name="__EVENTARGUMENT" id="__EVENTARGUMENT" value="" />
<input type="hidden" name="__VIEWSTATE" id="__VIEWSTATE" value="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" />
</div>

<script type="text/javascript">
//<![CDATA[
var theForm = document.forms['form1'];
if (!theForm) {
    theForm = document.form1;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
</script>


<script src="/WebResource.axd?d=pynGkmcFUV13He1Qd6_TZDfb3c0x1h4QseOgkLM9bQX802CiejQnU0SDIs_BbupkRM6Big2&amp;t=638459986960000000" type="text/javascript"></script>


<script src="/Telerik.Web.UI.WebResource.axd?_TSM_HiddenField_=RadScriptManager1_TSM&amp;compress=1&amp;_TSM_CombinedScripts_=%3b%3bSystem.Web.Extensions%2c+Version%3d4.0.0.0%2c+Culture%3dneutral%2c+PublicKeyToken%3d31bf3856ad364e35%3aen-US%3a18f1b484-bbc5-4e2e-8ca4-477603537f34%3aea597d4b%3ab25378d2%3bTelerik.Web.UI%2c+Version%3d2020.2.617.45%2c+Culture%3dneutral%2c+PublicKeyToken%3d121fae78165ba3d4%3aen-US%3a77834329-9f9d-4011-8eac-a82ffa414dd7%3a16e4e7cd%3aed16cbdc%3af7645509%3a88144a7a%3a33715776%3a58366029%3a24ee1bba%3af46195d3" type="text/javascript"></script>
<div class="aspNetHidden">

	<input type="hidden" name="__VIEWSTATEGENERATOR" id="__VIEWSTATEGENERATOR" value="69E71FEF" />
	<input type="hidden" name="__EVENTVALIDATION" id="__EVENTVALIDATION" value="GXFxpfg6rHv/MctYqSwQWOKhxq0Ccab2VrPC7/gO/jOQKoKhUDBe7bp+vCx/HhhciHUN7N9q5g0+pOJLb2l9ob3DYBz/K+JflAX2CP4FRbJ+TbMh" />
</div>
        
        <input type="hidden" name="ctl00$ctl00$hfPosition" id="hfPosition" />
        <div id="page-container">
            <script type="text/javascript">
//<![CDATA[
Sys.WebForms.PageRequestManager._initialize('ctl00$ctl00$RadScriptManager1', 'form1', ['tctl00$ctl00$RadAjaxManager1SU','RadAjaxManager1SU'], [], [], 90, 'ctl00$ctl00');
//]]>
</script>

            
            <!-- 2020.2.617.45 --><div id="RadAjaxManager1SU">
	<span id="ctl00_ctl00_RadAjaxManager1" style="display:none;"></span>
</div>            
            <div id="RadAjaxLoadingPanel1" class="RadAjax RadAjax_Metro" style="display:none;">
	<div class="raDiv">

	</div><div class="raColor raTransp">

	</div>
</div>

            <div class="body-bg body-bg-cover hor-center ver-bottom"><img src='/Uploads/Images/1/Background.JPG' class="bg-cover cover hor-center ver-bottom"/></div>
          <!-- Navigation -->
          <header>

            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg navbar-dark stylish-color-dark" style="font-size: 20px">
              
              <div class="container">
                  
              
              <!-- Navbar brand -->
              <a href="../../" class="navbar-brand">
                 
                  <i class="fas fa-home" id="iHome"></i> MUFA
              </a>
                            
              <!-- Collapse button -->
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>

              </button>

              <!-- Collapsible content -->
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  
                <!-- Links -->
                <ul class="navbar-nav mr-auto">
                    
                    <li id="divLeagues" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Leagues
                        </a>
                        <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                            
                                    <div class="bg-primary text-center white-text" style="font-weight: 300;">Summer 2024</div>
                                    
                                            <a class="dropdown-item" href='https://mufa.org/League/Division/HomeArticle.aspx?d=446'>
                                                Tuesday/Thursday Mixed
                                            </a>
                                        
                                            <a class="dropdown-item" href='https://mufa.org/League/Division/HomeArticle.aspx?d=447'>
                                                Monday/Wednesday Mixed
                                            </a>
                                        
                                
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarResources" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Resources
                        </a>
                        <div class="dropdown-menu  dropdown-primary" aria-labelledby="navbarResources">    
                            <a href="../../pages/leagues" class="dropdown-item">Leagues</a>
                            <hr />
                            <a href="../../pages/support" class="dropdown-item">Help / Support</a>  
                            <hr />
                            <a href="../../?p=9" class="dropdown-item">Rules</a>     
                            <a href="../../pages/WeatherPolicy" class="dropdown-item">Weather Policies</a>     
                            <a href="../../pages/COVID" class="dropdown-item">COVID Updates</a>    
                            <hr />
                            <a href="../Looking/LookingForTeam.aspx" class="dropdown-item">Team / Player Finder</a>
                            <a href="../../?p=4" class="dropdown-item">Pickup</a>
                            <a href="../../?p=6" class="dropdown-item">Area Teams</a>
                            <a href="../../?p=11" class="dropdown-item">Tournaments</a>
                            <hr />
                            <a href="../../?p=10" class="dropdown-item">Youth Ultimate</a>
                            <a href="../../?p=7" class="dropdown-item">Grants</a>
                            <a href="../../?p=5" class="dropdown-item">What is Ultimate?</a>
                            <a href="../../?p=16" class="dropdown-item">About Mufa</a>    
                            <hr />
                            <a href="../../pages/Nationals2024" class="dropdown-item">🥏 USAU Nationals 2024</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="../News.aspx" id="aNews" class="nav-link"><i class="far fa-newspaper"></i> News</a>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto nav-flex-icons">
                    <li id="liNavNotLoggedIn" class="nav-item">
                        <a href="../../Login" class="nav-link waves-effect waves-light btn-success">
                            Login or Signup
                        </a>
                    </li>
                    
                </ul>
                <!-- Links -->
              </div>

              <!-- Collapsible content -->
              </div>
            </nav>

            <!-- Navbar -->
          </header>
          <!-- Navigation -->

            
        


        

        <div class="pt-4"  id="content-wrap">
            
                     
        <div class="container">
            <div class="division-background">
                <h3 class="text-center">
                    <span id="cpMain_lblDivisionName">Summer 2024 - Monday/Wednesday Mixed</span>
                </h3>
            </div>

            <nav class="navbar navbar-expand-md" style="font-size: 20px; background-color: #cccccc">
                 
                <!-- Collapse button -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarDivision"
                aria-controls="navBarDivision" aria-expanded="false" aria-label="Toggle navigation">

                <i class="far fa-caret-square-down"></i>

                </button>

              <!-- Collapsible content -->
              <div class="collapse navbar-collapse justify-content-center" id="navBarDivision">
                  
                <!-- Links -->
                <ul class="navbar-nav mb-2 mb-lg-0">         
                    <li id="cpMain_liHome" class="nav-item">
                        <a href="HomeArticle.aspx?d=447" id="cpMain_aHome" class="nav-link force-black-color"><i class="fas fa-home"></i></a>
                    </li>     
                    <li id="cpMain_liRegister" class="nav-item">
                        <a href="RegisterLeague.aspx?d=447" id="cpMain_aRegister" class="nav-link force-black-color"><i class="far fa-edit"></i> Register</a>
                    </li>                   
                    <li class="nav-item">
                        <a href="Standings.aspx?d=447" id="cpMain_aStandings" class="nav-link force-black-color"><i class="fas fa-list"></i> Standings</a>
                    </li>              
                    <li class="nav-item">
                        
                    </li>
                    <li class="nav-item">
                        <a href="Schedule.aspx?d=447" id="cpMain_aSchedule" class="nav-link force-black-color"><i class="far fa-calendar-alt"></i> Schedule</a>
                    </li>
                    <li class="nav-item">
                        <a href="FieldList.aspx?d=447" id="cpMain_aLocations" class="nav-link force-black-color"><i class="fas fa-map-marked"></i> Locations</a>
                    </li>
                    <li class="nav-item">
                        <a href="PlayerList.aspx?d=447" id="cpMain_aPlayers" class="nav-link force-black-color"><i class="fas fa-running"></i> Players</a>
                    </li>
                    <li class="nav-item">
                        <a href="News.aspx?d=447" id="cpMain_aNews" class="nav-link force-black-color"><i class="far fa-newspaper"></i>
                            <span id="cpMain_spanNewsCount" class="badge rounded-pill badge-notification bg-danger"></span> News</a>
                    </li>
                </ul>

                <!-- Links -->
              </div>
              <!-- Collapsible content -->
            </nav>

            



            <div class="division-background">              
                
                <div class="mt-4 mb-4">      
                    
                    
    
    <div id="cpMain_cpMain_pnlAll">
	
        <!-- Name -->
        <h2 class="text-center"><span id="cpMain_cpMain_lblTeamName">JAG</span></h2>
        <h4 class="text-center"><small><i><span id="cpMain_cpMain_lblTeamColor">Jersey Color: Neon Orange</span></i></small></h4>
        <div class="text-center">
            
        </div>

        
                <h4 class="mt-3"><span id="cpMain_cpMain_rptSchedule_lblScheduleName_0">Regular Season</span></h4>
                <div id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule" class="RadGrid RadGrid_Metro" AllowFilteringByColum="false" EnableCaching="false">

		<div id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_GridData" class="rgDataDiv" style="overflow-x:auto;overflow-y:auto;width:100%;height:300px;">

	<table class="rgMasterTable" id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ctl00" style="width:100%;table-layout:auto;empty-cells:show;">
		<colgroup>
		<col style="display:none;" />
		<col style="display:none;" />
		<col  />
		<col  />
		<col  />
		<col  />
		<col  />
		<col  />
		<col  />
		<col  />
		<col  />
		<col  />
	</colgroup>
<thead>
			<tr>
				<th scope="col" class="rgHeader" style="display:none;">&nbsp;</th><th scope="col" class="rgHeader" style="display:none;">&nbsp;</th><th scope="col" title="Games Played" class="rgHeader">GP</th><th scope="col" class="rgHeader rgSorted">When</th><th scope="col" class="rgHeader">Jersey</th><th scope="col" class="rgHeader">Field</th><th scope="col" class="rgHeader" style="text-align:center;">Result</th><th scope="col" title="Points For" class="rgHeader" style="text-align:center;">PF</th><th scope="col" title="Points Against" class="rgHeader" style="text-align:center;">PA</th><th scope="col" class="rgHeader">Opponent</th><th scope="col" title="Swiss Ranking" class="rgHeader" style="text-align:center;">Rank</th><th scope="col" class="rgHeader">Opp. Jersey</th>
			</tr>
		</thead><tbody>
		<tr class="rgRow" id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ctl00__0">
			<td style="display:none;">CO</td><td style="display:none;">-1</td><td> 
                                    1
                                </td><td class="rgSorted"> 
                                    6/3/2024
                                    7:30 PM
                                </td><td> 
                                    <div style=''>
                                        Neon Orange
                                    </div>
                                </td><td> 
                                   <div style=''>
                                        <a href='https://mufa.org/League/Division/Field.aspx?f=8&d=447'>Northstar 4</a>
                                        (<a target="_blank" href='https://goo.gl/maps/xWCzTDbCUM8bFcUC6'>Map</a>)(<a target="_blank" href='http://mufa.org/uploads/1/parks/northstar.jpg'>Diagram</a>)
                                    </div>          
                                </td><td align="center"> 
                                   <span data-toggle="tooltip" title="Called Off due to weather conditions">CO</span>
                                </td><td align="center"> 
                                   0
                                </td><td align="center">                             
                                   0
                                </td><td> 
                                    <a href='https://mufa.org/League/Division/Team.aspx?t=5640&d=447'>
                                        Presenting the UN delegation from Flavor Town (2-0)
                                    </a>  
                                </td><td align="center">968</td><td> 
                                    <div>
                                        Cardinal
                                    </div>
                                </td>
		</tr><tr class="rgAltRow" id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ctl00__1">
			<td style="display:none;">CO</td><td style="display:none;">-1</td><td> 
                                    2
                                </td><td class="rgSorted"> 
                                    6/5/2024
                                    7:30 PM
                                </td><td> 
                                    <div style=''>
                                        Neon Orange
                                    </div>
                                </td><td> 
                                   <div style=''>
                                        <a href='https://mufa.org/League/Division/Field.aspx?f=8&d=447'>Northstar 4</a>
                                        (<a target="_blank" href='https://goo.gl/maps/xWCzTDbCUM8bFcUC6'>Map</a>)(<a target="_blank" href='http://mufa.org/uploads/1/parks/northstar.jpg'>Diagram</a>)
                                    </div>          
                                </td><td align="center"> 
                                   <span data-toggle="tooltip" title="Called Off due to weather conditions">CO</span>
                                </td><td align="center"> 
                                   0
                                </td><td align="center">                             
                                   0
                                </td><td> 
                                    <a href='https://mufa.org/League/Division/Team.aspx?t=5622&d=447'>
                                        Wednesday Team Name (1-0)
                                    </a>  
                                </td><td align="center">1051</td><td> 
                                    <div>
                                        Carolina Blue
                                    </div>
                                </td>
		</tr><tr class="rgRow" id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ctl00__2">
			<td style="display:none;">W</td><td style="display:none;">33391</td><td> 
                                    3
                                </td><td class="rgSorted"> 
                                    6/10/2024
                                    7:30 PM
                                </td><td> 
                                    <div style=''>
                                        Neon Orange
                                    </div>
                                </td><td> 
                                   <div style=''>
                                        <a href='https://mufa.org/League/Division/Field.aspx?f=7&d=447'>Northstar 3</a>
                                        (<a target="_blank" href='https://goo.gl/maps/xWCzTDbCUM8bFcUC6'>Map</a>)(<a target="_blank" href='http://mufa.org/uploads/1/parks/northstar.jpg'>Diagram</a>)
                                    </div>          
                                </td><td align="center"> 
                                   <span data-toggle="tooltip" title="Won">W</span>
                                </td><td align="center"> 
                                   12
                                </td><td align="center">                             
                                   8
                                </td><td> 
                                    <a href='https://mufa.org/League/Division/Team.aspx?t=5628&d=447'>
                                        Discombobulated (1-1)
                                    </a>  
                                </td><td align="center">911</td><td> 
                                    <div>
                                        White
                                    </div>
                                </td>
		</tr><tr class="rgAltRow" id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ctl00__3">
			<td style="display:none;">L</td><td style="display:none;">33471</td><td> 
                                    4
                                </td><td class="rgSorted"> 
                                    6/12/2024
                                    6:00 PM
                                </td><td> 
                                    <div style=''>
                                        Neon Orange
                                    </div>
                                </td><td> 
                                   <div style=''>
                                        <a href='https://mufa.org/League/Division/Field.aspx?f=25&d=447'>Sandstone 1</a>
                                        (<a target="_blank" href='https://goo.gl/maps/vEWsibuMUfehGT8T8'>Map</a>)(<a target="_blank" href='http://mufa.org/uploads/1/parks/SANDSTONE.jpg'>Diagram</a>)
                                    </div>          
                                </td><td align="center"> 
                                   <span data-toggle="tooltip" title="Lost">L</span>
                                </td><td align="center"> 
                                   3
                                </td><td align="center">                             
                                   13
                                </td><td> 
                                    <a href='https://mufa.org/League/Division/Team.aspx?t=5622&d=447'>
                                        Wednesday Team Name (1-0)
                                    </a>  
                                </td><td align="center">1051</td><td> 
                                    <div>
                                        Carolina Blue
                                    </div>
                                </td>
		</tr><tr class="rgRow" id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ctl00__4">
			<td style="display:none;">L</td><td style="display:none;">33587</td><td> 
                                    5
                                </td><td class="rgSorted"> 
                                    6/17/2024
                                    7:30 PM
                                </td><td> 
                                    <div style=''>
                                        Neon Orange
                                    </div>
                                </td><td> 
                                   <div style=''>
                                        <a href='https://mufa.org/League/Division/Field.aspx?f=84&d=447'>Olin 1</a>
                                        (<a target="_blank" href='https://goo.gl/maps/jbgSfm55KWZg65Za7'>Map</a>)(<a target="_blank" href='http://mufa.org/uploads/1/parks/olin.jpg'>Diagram</a>)
                                    </div>          
                                </td><td align="center"> 
                                   <span data-toggle="tooltip" title="Lost">L</span>
                                </td><td align="center"> 
                                   11
                                </td><td align="center">                             
                                   12
                                </td><td> 
                                    <a href='https://mufa.org/League/Division/Team.aspx?t=5691&d=447'>
                                        Barbara and the Kazoos (1-1)
                                    </a>  
                                </td><td align="center">951</td><td> 
                                    <div>
                                        Neon Pink
                                    </div>
                                </td>
		</tr><tr class="rgAltRow" id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ctl00__5">
			<td style="display:none;">&nbsp;</td><td style="display:none;">&nbsp;</td><td> 
                                    6
                                </td><td class="rgSorted"> 
                                    6/19/2024
                                    7:30 PM
                                </td><td> 
                                    <div style=''>
                                        Neon Orange
                                    </div>
                                </td><td> 
                                   <div style=''>
                                        <a href='https://mufa.org/League/Division/Field.aspx?f=85&d=447'>Olin 2</a>
                                        (<a target="_blank" href='https://goo.gl/maps/jbgSfm55KWZg65Za7'>Map</a>)(<a target="_blank" href='http://mufa.org/uploads/1/parks/olin.jpg'>Diagram</a>)
                                    </div>          
                                </td><td align="center" colspan="3"> 
                                   <a href="https://mufa.org/League/Player/Leader/ReportScore.aspx?m=37814&d=447">Submit Post-Game Report</a>
                                </td><td> 
                                    <a href='https://mufa.org/League/Division/Team.aspx?t=5656&d=447'>
                                        Flickachu (1-2)
                                    </a>  
                                </td><td align="center">945</td><td> 
                                    <div>
                                        True Red
                                    </div>
                                </td>
		</tr>
		</tbody>

	</table>	</div>
	<div id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_SharedCalendarContainer" style="display:none;">

	</div><input id="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ClientState" name="ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ClientState" type="hidden" />	</div>
        <span id="cpMain_cpMain_lblTeamBio"></span>

        <div class="mt-5 row">
            <div class="col-sm-6 text-center">
                <a id="cpMain_cpMain_hlJoinTeam" class="btn btn-primary waves-effect z-depth-0" href="https://mufa.org/League/Player/Register/JoinTeam.aspx?t=5634&amp;d=447">Join Team</a>
            </div>
            
        </div>
    
</div>
    
        

                </div>
            </div>
            
           
        </div>

        </div>
        </div>
       

        
  


    <script>
        function UpdateUrl(qName, qVal) {
            var url = new URL(window.location);
            url.searchParams.set(qName, qVal);
            window.history.pushState({}, '', url);
        }

        function ClearQueryString() {
            var url = location.href.split("?")[0];

            if (window.location.hash) {
                var hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character

                window.history.pushState({}, '', url + "#" + hash);
            } else {
                window.history.pushState({}, '', url);
            }
        }
    </script>

    

<script type="text/javascript">
//<![CDATA[
window.__TsmHiddenField = $get('RadScriptManager1_TSM');Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadAjaxManager, {"_updatePanels":"","ajaxSettings":[],"clientEvents":{OnRequestStart:"",OnResponseEnd:""},"defaultLoadingPanelID":"RadAjaxLoadingPanel1","enableAJAX":true,"enableHistory":false,"links":[],"styles":[],"uniqueID":"ctl00$ctl00$RadAjaxManager1","updatePanelsRenderMode":0}, null, null, $get("ctl00_ctl00_RadAjaxManager1"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadAjaxLoadingPanel, {"initialDelayTime":0,"isSticky":false,"minDisplayTime":0,"skin":"Metro","transparency":30,"uniqueID":"ctl00$ctl00$RadAjaxLoadingPanel1","zIndex":90000}, null, null, $get("RadAjaxLoadingPanel1"));
});
Sys.Application.add_init(function() {
    $create(Telerik.Web.UI.RadGrid, {"ClientID":"ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule","ClientSettings":{"AllowAutoScrollOnDragDrop":true,"ShouldCreateRows":true,"DataBinding":{},"Selecting":{"CellSelectionMode":0},"Scrolling":{"AllowScroll":true,"SaveScrollPosition":true,"ScrollHeight":"300px"},"Resizing":{},"ClientMessages":{},"KeyboardNavigationSettings":{"AllowActiveRowCycle":false,"EnableKeyboardShortcuts":true,"FocusKey":89,"InitInsertKey":73,"RebindKey":82,"ExitEditInsertModeKey":27,"UpdateInsertItemKey":13,"DeleteActiveRow":127,"ExpandDetailTableKey":39,"CollapseDetailTableKey":37,"MoveDownKey":40,"MoveUpKey":38,"SaveChangesKey":85,"CancelChangesKey":81},"Animation":{},"Virtualization":{}},"Skin":"Metro","UniqueID":"ctl00$ctl00$cpMain$cpMain$rptSchedule$ctl00$rgTeamSchedule","_activeRowIndex":"","_controlToFocus":"","_currentPageIndex":0,"_defaultDateTimeFormat":"M/d/yyyy h:mm:ss tt","_editIndexes":"[]","_embeddedSkin":true,"_freezeText":"Freeze","_gridTableViewsData":"[{\"ClientID\":\"ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ctl00\",\"UniqueID\":\"ctl00$ctl00$cpMain$cpMain$rptSchedule$ctl00$rgTeamSchedule$ctl00\",\"PageSize\":10,\"PageCount\":1,\"EditMode\":\"EditForms\",\"AllowPaging\":false,\"CurrentPageIndex\":0,\"VirtualItemCount\":0,\"AllowMultiColumnSorting\":false,\"AllowNaturalSort\":true,\"AllowFilteringByColumn\":false,\"PageButtonCount\":10,\"HasDetailTables\":false,\"HasMultiHeaders\":false,\"CheckListWebServicePath\":\"\",\"GroupLoadMode\":\"Server\",\"PagerAlwaysVisible\":false,\"IsItemInserted\":false,\"clientDataKeyNames\":[],\"hasDetailItemTemplate\":false,\"_dataBindTemplates\":false,\"_selectedItemStyle\":\"\",\"_selectedItemStyleClass\":\"rgSelectedRow\",\"_columnsData\":[{\"UniqueName\":\"HomeResultDisplay\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridBoundColumn\",\"ColumnGroupName\":\"\",\"Editable\":true,\"DataTypeName\":\"System.String\",\"DataField\":\"HomeResultDisplay\",\"Display\":false},{\"UniqueName\":\"HomeSurvey\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridBoundColumn\",\"ColumnGroupName\":\"\",\"Editable\":true,\"DataTypeName\":\"System.Int32\",\"DataField\":\"HomeSurvey\",\"Display\":false},{\"UniqueName\":\"TemplateColumn\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridTemplateColumn\",\"ColumnGroupName\":\"\",\"Editable\":false,\"DataTypeName\":\"System.Int32\",\"DataField\":\"\",\"Display\":true},{\"UniqueName\":\"ScheduleDate\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridTemplateColumn\",\"ColumnGroupName\":\"\",\"Editable\":false,\"DataTypeName\":\"System.String\",\"DataField\":\"\",\"Display\":true},{\"UniqueName\":\"HomeJersey\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridTemplateColumn\",\"ColumnGroupName\":\"\",\"Editable\":false,\"DataTypeName\":\"System.String\",\"DataField\":\"\",\"Display\":true},{\"UniqueName\":\"FieldNameFull\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridTemplateColumn\",\"ColumnGroupName\":\"\",\"Editable\":false,\"DataTypeName\":\"System.String\",\"DataField\":\"FieldNameFull\",\"Display\":true},{\"UniqueName\":\"Result\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridTemplateColumn\",\"ColumnGroupName\":\"\",\"Editable\":false,\"DataTypeName\":\"System.String\",\"DataField\":\"\",\"Display\":true},{\"UniqueName\":\"HomePoints\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridTemplateColumn\",\"ColumnGroupName\":\"\",\"Editable\":false,\"DataTypeName\":\"System.String\",\"DataField\":\"\",\"Display\":true},{\"UniqueName\":\"AwayPoints\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridTemplateColumn\",\"ColumnGroupName\":\"\",\"Editable\":false,\"DataTypeName\":\"System.String\",\"DataField\":\"\",\"Display\":true},{\"UniqueName\":\"AwayTeamName\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridTemplateColumn\",\"ColumnGroupName\":\"\",\"Editable\":false,\"DataTypeName\":\"System.String\",\"DataField\":\"\",\"Display\":true},{\"UniqueName\":\"AwayTeamRanking\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridBoundColumn\",\"ColumnGroupName\":\"\",\"Editable\":true,\"DataTypeName\":\"System.Int32\",\"DataField\":\"AwayTeamRanking\",\"Display\":true},{\"UniqueName\":\"AwayJersey\",\"Resizable\":true,\"Reorderable\":true,\"Selectable\":true,\"Groupable\":true,\"ColumnType\":\"GridTemplateColumn\",\"ColumnGroupName\":\"\",\"Editable\":false,\"DataTypeName\":\"System.String\",\"DataField\":\"\",\"Display\":true}]}]","_masterClientID":"ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ctl00","_shouldFocusOnPage":false,"_unfreezeText":"Unfreeze","allowMultiRowSelection":false,"clientStateFieldID":"ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule_ClientState","expandItems":{},"renderMode":2}, null, null, $get("ctl00_ctl00_cpMain_cpMain_rptSchedule_ctl00_rgTeamSchedule"));
});
//]]>
</script>
</form>

    
    <!-- SCRIPTS -->
    <!-- JQuery -->
   
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!-- Tooltips -->
    <script type="text/javascript" src="/Includes/js/popper.min.js"></script>
    <!-- Bootstrap core JavaScript -->
    <script type="text/javascript" src="/Includes/js/bootstrap.min.js"></script>
    <!-- MDB core JavaScript -->
    <script type="text/javascript" src="/Includes/js/mdb.min.js"></script>
    
    <script type="text/javascript">
        // Tooltips Initialization
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
    </script>

    <script type="text/javascript">
        $(function () {
            var f = $("#hfPosition");
            window.onload = function () {
                var position = parseInt(f.val());
                if (!isNaN(position)) {
                    $(window).scrollTop(position);
                }
            };
            window.onscroll = function () {
                var position = $(window).scrollTop();
                f.val(position);
            };
        });
    </script>

    
    
    <script>
        function copyToClipboard(element) {
            var $temp = $("<input>");
            $("body").append($temp);
            var val = $(element).val();
            $temp.val(val).select();
            document.execCommand("copy");
            $temp.remove();
        }
    </script>


</body>
</html>
`;
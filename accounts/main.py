#Importing Modules
import csv

#https://www.guru99.com/reading-and-writing-files-in-python.html


#opens csv with the list of urls to process
with open('accounts.csv', 'r',encoding="utf-8") as csv_file:
  csv_reader = csv.reader(csv_file)

  for line in csv_reader:
    try:
      #crea las variables
      nombre = line[0]
      print(nombre)
      url = line[1]
      print(url)
      username = line[2]
      print(username)
      followers = line[3]
      print(followers)
      engagement = line[4]
      print(engagement)
      profilepic = line[5]

      page = '<!DOCTYPE html><html lang="en" dir="ltr"><head><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous"><link rel="icon" href="../style/favicon.ico" type="image/x-icon" /><link rel="shortcut icon" href="../style/favicon.ico" type="image/x-icon" /><meta charset="utf-8"><title>varusername Instagram | Influencer Data</title><meta name="description" content="Instagram de varnombre, followers, eng rate ...." /><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="twitter:card" content="https://avatars.io/instagram/varusername"><meta name="twitter:site" content="@ferminrp"><meta name="twitter:title" content="varusername Instagram | Influencer Data"><meta name="twitter:description" content="Instagram de varnombre, followers, eng rate ..."><meta name="twitter:creator" content="@ferminrp"><meta name="twitter:image:src" content="https://avatars.io/instagram/varusername"><meta property="og:title" content="Instagram Influencers Argentina" /><meta property="og:type" content="website" /><meta property="og:url" content="#" /><meta property="og:image" content="images/overview.png" /><meta property="og:description" content="Instagram de varnombre, followers, eng rate .." /><meta property="og:site_name" content="Instagram Influencers Argentina" /><link rel="stylesheet" href="../style/accounts.css"></head><body><div class="navbar"><h6><a onclick="openWebsite(\'influencersargentina.xyz\',\'home\')" href="https://influencersargentina.xyz">Influencers Argentina</a></h6></div><div class="card" id="basic-info"><div style="background-image: url(\'varprofilepic\')" class="img"></div><div class="basic-right"><h1>varnombre</h1><p>¿Queres contratar a varusername como influencer para tu marca? <a onclick="openWebsite(\'medialab.lookea.me\',\'LOOKEA\')" target="_blank" href="https://medialab.lookea.me/?ref=influencersargentina.xyz">Contactanos</a></p> <a target="_blank" href="https://instagram.com/varusername">Ir al perfil en Instagram</a></div></div><div class="kpis"><div class="card followers"><h2>varfollowers</h2><p class="kpi-legend">Followers</p></div><div class="card engrate"><h2>varengagement</h2><p class="kpi-legend">Engagement Rate</p></div></div><div class="final"><h3>¿Queres encontrar otros influencers como varusername?</h3> <a id="cta" href="https://influencersargentina.xyz">Ver Mas</a></div> <script src="../js/click.js"></script> <script src="../js/accounts.js"></script> </body></html>'
      page = page.replace("varusername",username)
      page = page.replace("varfollowers",followers)
      page = page.replace("varnombre",nombre)
      page = page.replace("varengagement",engagement)
      page = page.replace("varprofilepic",profilepic)



      f = open(username+".html","w+", encoding="utf8")
      f.write(page)
      f.close()
    except:
      pass
        
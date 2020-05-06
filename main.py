# Importo Modules
import urllib.parse
import traceback
import json
import requests

# Este es el template de html en el que se basan todas las paginas
html = '<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Influencer: varname (@varusername) | Influencers Argentina</title> <meta name="title" content="Influencer: varname (@varusername) | Influencers Argentina"> <meta name="description" content="Todas las estadísticas de @varusername como influencer."> <meta property="og:type" content="website"> <meta property="og:url" content="https://influencersargentina.xyz/accounts/varusername"> <meta property="og:title" content="Influencer: varname (@varusername) | Influencers Argentina"> <meta property="og:description" content="Todas las estadísticas de @varusername como influencer."> <meta property="og:image" content=""> <meta property="twitter:card" content="summary_large_image"> <meta property="twitter:url" content="https://influencersargentina.xyz/accounts/varusername"> <meta property="twitter:title" content="Influencer: varname (@varusername) | Influencers Argentina"> <meta property="twitter:description" content="Todas las estadísticas de @varusername como influencer."> <meta property="twitter:image" content=""> <link rel="stylesheet" href="/style/accounts.css"> <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png"> <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png"> <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png"></head><body> <div id="app"> <h1>Estadísticas del instagram de <span class="highlight">@{{user}}</span></h1> <div class="profileInfo" v-if="info !==null"> <div class="profileCard"> <div v-bind:style="{backgroundImage: \'url(\' + this.profilePic + \')\'}" class="profilePicture"></div><div class="userInfo"> <h3>{{name}}</h3> <div class="kpis"> <div> <p>{{Number(followers).toLocaleString()}} Followers</p><p>{{totalEngagements.toLocaleString()}} Engagements</p></div><div> <p>{{Number(following).toLocaleString()}} Following</p><p class="strong highlight">{{engagementRate}} Eng. Rate</p></div></div></div></div> <div class="ctas"> <a id="opposite" v-bind:href="\'https://instagram.com/\' + user">Ver en Instagram</a> <a href="/">Ver otros influencers</a> </div><div class="posteos"> <div class="posts-grid"> <div v-bind:style="{backgroundImage: \'url(\' + post.node.display_url + \')\'}" v-for="post in posts" :key="post.message" class="post"> <div class="overlay"> <p class="likes">❤{{post.node.edge_liked_by.count.toLocaleString()}}</p><p class="comments">💬{{post.node.edge_media_to_comment.count.toLocaleString()}}</p></div></div></div></div></div><p class="footer">Built with ❤️ by <a href="https://ferminrp.com">ferminrp.com</a></p><script src="https://cdn.jsdelivr.net/npm/vue"></script><script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> <script src="/scripts/accounts.js"></script><script type="text/javascript">(function (w, d){w.makerbadge={}, methods=[\'init\']; w.makerbadge._c=[]; methods.forEach(m=>{w.makerbadge[m]=function (){w.makerbadge._c.push([m, arguments]);}}); var el=d.createElement(\'script\'); el.type="text/javascript"; el.async=true; el.src="https://makerbadge.com/shim.js"; var before=d.getElementsByTagName(\'script\')[0]; before.parentNode.insertBefore(el, before);})(window, document); makerbadge.init({clientId: "a55b40f7-af56-4f29-a634-2409543ef706", position: "right"}); </script></body></html>'

# Llamo a firebase y pido toda la info
url = "https://influencersargentina.xyz/data.json"
response = requests.get(url)
data = json.loads(response.text)
#print(json.dumps(data["destinations"]["buenos-aires-city"], indent=4))


# Almaceno aca las urls de las paginas creadas para sumarlas al sitemap
sitemap = [""]


for item in data:
  sitemap.append("/accounts/"+ item["username"])
  temp_html = html
  varname = item["nombre"]
  varusername = item["username"]

  print(varusername)
  temp_html = temp_html.replace("varname",varname)
  temp_html = temp_html.replace("varusername",varusername)


  f = open("accounts/"+varusername+".html","w+", encoding="utf8")
  f.write(temp_html)
  f.close()


f = open("sitemap.txt", 'w')
for item in sitemap:
  f.write("https://influencersargentina.xyz"+item)
  f.write('\n')
f.close()

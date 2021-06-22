fx_version 'cerulean'
game 'gta5'
version '1.0.0'
author 'TinoKi' 
description 'HUD by TinoKi'

ui_page 'html/index.html'

client_scripts {
	'client/client.lua'
}

server_scripts {
    'server/server.lua',
}


files {
	'html/index.html',
	'html/css/style.css',
	'html/js/main.js',
	'html/img/*.png',
}
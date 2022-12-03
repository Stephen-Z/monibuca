package webplugin

import (
	"net/http"

	. "m7s.live/engine/v4"
	"m7s.live/engine/v4/config"
)

type WebPluginConfig struct {
	// 定义插件的配置
	config.HTTP
}

func (p *WebPluginConfig) OnEvent(event any) {
	switch event.(type) {
	case FirstConfig:
		{
			// p.HandleFunc("/", http.FileServer(http.Dir("./static")).ServeHTTP)
		} //插件初始化逻辑

		// case Config: //插件热更新逻辑
		// case *Stream: //按需拉流逻辑
	}
}

var handler http.Handler = http.FileServer(http.Dir("."))

func (p *WebPluginConfig) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	handler.ServeHTTP(w, r)
}

var plugin = InstallPlugin(new(WebPluginConfig))

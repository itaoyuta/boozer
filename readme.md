### シェアしないこと
- Dockerの技術的な仕組み
	* つきつめると難しい、自分もまだ全然理解できていない
	* どんなことができるか技術的コミットするほど価値があるかを知った上で、ブラックボックスを紐解いていく
- オーケストレーションツールの説明
	* gcpと連携したいのでkubernetesが最適解そうってところまでしかわかっていない
	* swarmの力の入れようはきになる 

### やること
- docker-composeを利用して、コンテナ間の連携を知ってもらう
	* busyboxでVolumeはってコンテナ間のデータ連携
	* nginxでリクエストによってコンテナをさばく

- gcroud上へのデプロイ
	* google cloud engineは課金設定が必要なので、見せるだけ

### ハンズオン手順
* docker、git環境はある前提

1. 作業用dirを用意してください(~/Documents/handson/を作成)
2. [git clone git@github.com:itaoyuta/boozer.git](https://github.com/itaoyuta/boozer)
3. ターミナルで $ docker-machine ls 
4. /private/etc/hostsに ~/Documents/handson/boozer/compose/nginx/env/etc/nginx.conf のdomainと上記で出たNAME:defaultのURLを記述

	```
	# hosts
	192.168.99.100  docker-pci.local
	192.168.99.100  jenkins.docker-pci.local
	192.168.99.100  app.docker-pci.local
	```

5. 以下、作業

	```
	$ docker build -t="dataonly/pci" compose/dataonly
	$ docker run -d --name pci-data -it dataonly/pci
	$ cd compose/app/
	$ npm install
	$ cd ../../
	$ docker-compose build
	$ docker-compose up -d
	```

6. [http://jenkins.docker-pci.local/](http://jenkins.docker-pci.local/), [app.docker-pci.local/](app.docker-pci.local/) へアクセスしてみる
7. 
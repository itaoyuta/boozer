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
* dockerはコンテナという単位で動かすことが基礎的なことだと説明

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

6. [http://jenkins.docker-pci.local/](http://jenkins.docker-pci.local/), [app.docker-pci.local/](http://app.docker-pci.local/) へアクセスしてみる
7. linkがないので作成してみる
8. ~/Documents/handson/boozer/compose/dataonly/Dockerfile に書いてあるように、dataonlyの/usr/src/app/lib/public/datavol/が連携出来るデータ格納場所
9. 以下作業

	```
	$ docker exec -it pci-data sh
	$ cd /usr/src/app/lib/public/datavol
	$ touch test.txt
	$ vi test.txt
	```
10. 更新されたので[アクセス](http://app.docker-pci.local/)してみる
11. nginxとかの紹介
12. linkの紹介







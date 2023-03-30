
## IOS
![alt text](https://i.postimg.cc/XNRvkWFd/Simulator-Screen-Shot-i-Phone-14-2023-03-30-at-09-29-07.png)
## Android
![alt text](https://i.postimg.cc/mrCjhBQj/Screenshot-1680143716.png)
## 1. run this to install all dependencies 
```sh
$ yarn install 
```
## 2. pod install for IOS
```sh
$ cd ios && pod install && cd ..
```
## 3. create file .env.dev 
```dosini
BASE_URL=https://api.example.org
```
 ## 4. To start Metro
 ```sh
$ yarn run start
```
## 5.run this to run the app
(Android)
 ```sh
$ yarn run android
```
(IOS)
 ```sh
$ yarn run ios
```


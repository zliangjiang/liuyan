var map = new BMap.Map("container");
map.centerAndZoom("上海",11);//new BMap.Point(116.404, 39.915), 5);
var BeiJingPos=new BMap.Point(116.41667, 39.91667),
ShangHaiPos=new BMap.Point(121.43333, 31.50000),
GuangDongPos=new BMap.Point(113.23333, 23.16667),
TaiWanPos=new BMap.Point(121.491121, 25.127053);
var points = [BeiJingPos, ShangHaiPos, GuangDongPos];

/** How to make a polyline **/
//var polyline = new BMap.Polyline(points,{strokeColor:"red", strokeWeight:2, strokeOpacity:0.0});
//map.addOverlay(polyline);
//polyline.enableEditing();

/** How to make a polygon **/
//var polygon = new BMap.Polygon(points,{strokeColor:"green", strokeWeight:2, strokeOpacity:0.0});
//map.addOverlay(polygon);
//polygon.enableEditing();

/** How to make a circle **/
//var circle = new BMap.Circle(BeiJingPos, 100000,{strokeColor:"red",fillColor:"green",strokeWeight:2,
    //                    strokeOpacity:0.0, fillWeight:2, fillOpacity:0.0});
//map.addOverlay(circle);
//circle.enableEditing();

/** How to make a marker **/
//var marker = new BMap.Marker(TaiWanPos);
//map.addOverlay(marker);
//marker.enableDragging();

/** How to make a hotSpot **/
//var hotSpot = new BMap.Hotspot(GuangDongPos,{text:"HotSpot", offsets:[10, 10, 10, 10], minZoom:6});
//map.addHotspot(hotSpot);

/** How to make a curve **/
//var curve = new BMapLib.CurveLine(points, {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.0}); //创建弧线对象
//map.addOverlay(curve); //添加到地图中
//curve.enableEditing(); //开启编辑功能

/** How to measure two places' distance **/
//var myDis = new BMapLib.DistanceTool(map);
//myDis.open();

/** How to marker places nearby a place **/
//var local = new BMap.LocalSearch(map, {
    //    renderOptions:{map: map, autoViewport:true}
//});
//local.searchNearby("小吃", "莘庄");

//反地址解析
//var gc = new BMap.Geocoder();
//map.addEventListener("click", function(e){
//    var pt = e.point;
//    gc.getLocation(pt, function(rs){
//        var addComp = rs.addressComponents;
//        alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
//    });
//});

// 创建地址解析器实例
//var myGeo = new BMap.Geocoder();
//// 将地址解析结果显示在地图上,并调整地图视野
//myGeo.getPoint("上海市闵行区东川路800号", function(point){
//    if (point) {
//        map.centerAndZoom(point, 16);
//        map.addOverlay(new BMap.Marker(point));
//    }
//}, "上海市");

//浏览器定位
var geolocation = new BMap.Geolocation();
geolocation.getCurrentPosition(function(r){
    if(this.getStatus() == BMAP_STATUS_SUCCESS){
        var mk = new BMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        alert('您的位置：'+r.point.lng+','+r.point.lat);
    }
    else {
        alert('failed'+this.getStatus());
    }
},{enableHighAccuracy: true});
//关于状态码
//BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
//BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
//BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
//BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
//BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
//BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
//BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
//BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
//BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)

//IP定位获取当前城市
function myFun(result){
    var cityName = result.name;
    map.setCenter(cityName);
    alert(cityName);
}
var myCity = new BMap.LocalCity();
myCity.get(myFun);
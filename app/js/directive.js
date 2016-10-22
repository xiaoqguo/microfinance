/**
 * Created by ldjt on 16/10/20.
 */
app.directive('microMainCell',function(){
    return{
        restrict:'AE',
        scope:{
            title:'=',
            yield:'=',
            bgImgPath:'=',
            yieldBottom:'=',
            desc:'=',
            ifShowBgImg:'='
        },
        controller:function($scope){
            $scope.ifShowBgImg=true;
        },
        transclude:true,
        templateUrl:'tpls/microMainCell.html'
    }
})
app.directive('microMainPanelDir',function(){
    return{
        restrict:'AE',
        scope:{
            panelTitle:'=',
            panelDesc:'='
        },
        transclude:true,
        templateUrl:'tpls/microMainPanel.html'
    }
})

app.directive('myRadioDir',function(){
    return{
        restrict:'AE',
        scope:{
            selectRadioAction:'=',
            items:'=',
            selectedBgColor:'=',
            normalBgColor:'=',
            itemStyle:'=',
            selectIndex:'='
        },
        controller:function($scope){
            if($scope.selectIndex===undefined){
                $scope.selectIndex=0;
            }
            if($scope.selectedBgColor===undefined){
                $scope.selectedBgColor='orange';
            }
            if($scope.normalBgColor===undefined){
                $scope.normalBgColor='gray';
            }
            if($scope.itemStyle===undefined){
                $scope.itemStyle=[];
                for(x in $scope.items){
                    if(x==$scope.selectIndex){
                        $scope.itemStyle.push({backgroundColor:$scope.selectedBgColor});
                    }else{
                        $scope.itemStyle.push({backgroundColor:$scope.normalBgColor});
                    }
                }
            }
            if($scope.selectRadioAction===undefined) {
                $scope.selectRadioAction = function (index) {
                    if(index!=$scope.selectIndex) {
                        var pStyle = $scope.itemStyle[$scope.selectIndex];
                        pStyle.backgroundColor = $scope.normalBgColor;
                        var cStyle=$scope.itemStyle[index];
                        cStyle.backgroundColor=$scope.selectedBgColor;
                        $scope.selectIndex=index;
                    }
                }
            }
        },
        templateUrl:'tpls/myRadioBT.html'
    }
})



//typeof 返回的是字符串，有六种可能：number、string、boolean、object、function、undefined。
var isUndefined=function(obj){
    if(typeof obj == 'undefined'){
        return true;
    }else{
        return false;
    }
}

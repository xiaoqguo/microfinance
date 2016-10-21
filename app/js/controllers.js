/**
 * Created by ldjt on 16/10/20.
 */
app.controller('mainCrl',function($scope,$state){
    $scope.data1=dumyData1;
    $scope.data2=dumyData2;
    $scope.cell1BGPath='resource/main_cell_0.jpg';
    $scope.cell2BGPath='resource/main_cell_1.jpg';
    $scope.panelTitle1='贷款';
    $scope.panelMoreText1='查看更多贷款产品';
    $scope.panelTitle2='理财';
    $scope.panelMoreText2='更多产品敬请期待';
    $scope.showapplyLoanAction=function(){
        $state.go('applyloan');
    }
});
app.controller('applyLoanCrl',function($scope,$state){
    $scope.papers=[
        {backgroundColor: 'coral',color:'white'},
        {backgroundColor: 'transparent',color:'black'},
        {backgroundColor: 'transparent',color:'black'},
        {backgroundColor: 'transparent',color:'black'},
        {backgroundColor: 'transparent',color:'black'}
    ];
    $scope.prePaper=$scope.papers[0];
    $scope.slideHasChanged=function(index){
        $scope.papers[index].backgroundColor='coral';
        $scope.papers[index].color='white';
        $scope.prePaper.backgroundColor='transparent';
        $scope.prePaper.color='black';
        $scope.prePaper=$scope.papers[index];
    }
    $scope.goBackAction=function(){
        history.back();
    }
    $scope.showInfomation=function(){
        $state.go('info');
    }
});
app.controller('infomationCrl',function($scope){
    $scope.goBackAction=function(){
        history.back();
    }
})
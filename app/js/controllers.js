/**
 * Created by ldjt on 16/10/20.
 */
app.controller('mainCrl',function($scope){
    $scope.data1=dumyData1;
    $scope.data2=dumyData2;
    $scope.cell1BGPath='resource/main_cell_0.jpg';
    $scope.cell2BGPath='resource/main_cell_1.jpg';
    $scope.panelTitle1='贷款';
    $scope.panelMoreText1='查看更多贷款产品';
    $scope.panelTitle2='理财';
    $scope.panelMoreText2='更多产品敬请期待';
});
app.controller('applyLoanCrl',function($scope){
    $scope.papers=[
        {backgroundColor: 'coral'},
        {backgroundColor: 'transparent'},
        {backgroundColor: 'transparent'},
        {backgroundColor: 'transparent'},
        {backgroundColor: 'transparent'}
    ];
    $scope.prePaper=$scope.papers[0];
    $scope.slideHasChanged=function(index){
        $scope.papers[index].backgroundColor='coral';
        $scope.prePaper.backgroundColor='transparent';
        $scope.prePaper=$scope.papers[index];
    }
});
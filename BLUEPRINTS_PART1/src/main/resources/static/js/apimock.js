apimock=(function(){
    let mockdata=[];

    mockdata["author1"]=[
        {"author":"author1",
         "points":
            [{"x":10,"y":15},
             {"x":3,"y":0},
             {"x":2,"y":4},
             {"x":7,"y":8}],
         "name":"blueprint1"},
        {"author":"author1",
            "points":
                [{"x":1,"y":12},
                    {"x":5,"y":3},
                    {"x":7,"y":1},
                    {"x":8,"y":11},
                    {"x":10,"y":12}],
            "name":"blueprint2"},
        ];
    mockdata["author2"]=[
        {"author":"author2",
         "points":
             [{"x":1,"y":1},
              {"x":2,"y":2},
              {"x":3,"y":3},
             ],
         "name":"blueprintb"}];

    return {
        getBlueprintsByAuthor:function(name,callback){
            return callback(
                mockdata[name]
            );
        }
    };
})();
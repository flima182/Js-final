// boolean
// string
// tuple
var title;
title: [1, "Título"];
// enum { chave: valor }
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["red"] = "#FF0";
    Color["blue"] = "#00F";
})(Color || (Color = {}));

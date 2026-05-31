var grafico09 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v6.json",
    "data": {
        "url": "https://raw.githubusercontent.com/wendellandrey7-afk/trabalho-do-csv/refs/heads/main/dados-desigualdade-racial-br-01.csv"
    },
    "mark": "bar",
    "width": 500,
    "height": 300,
    "encoding": {
        "x": {"field": "regiao", "type": "nominal", "axis": {"labelAngle": 0}},
        "y": {
            "field": "$_renda_med_formal",
            "aggregate": "mean",
            "type": "quantitative"
        },
        "color": {"field": "regiao", "type": "nominal"}
    }
};
vegaEmbed('#grafico09', grafico09);
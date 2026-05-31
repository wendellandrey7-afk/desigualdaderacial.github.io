var grafico07 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v6.json",
    "description": "Taxa média de subutilização.",
    "data": {
        "url": "https://raw.githubusercontent.com/wendellandrey7-afk/trabalho-do-csv/refs/heads/main/dados-desigualdade-racial-br-01.csv"
    },
    "mark": "bar",
    "width": 500,
    "height": 350,
    "encoding": {
        "x": {"field": "ano", "type": "nominal", "axis": {"labelAngle": 0}},
        "y": {
            "field": "%_subutilizacao",
            "aggregate": "mean",
            "type": "quantitative"
        }
    }
};

vegaEmbed('#grafico07', grafico07);
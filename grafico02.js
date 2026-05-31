var grafico02 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v6.json",
    "description": "Taxa média de homicídios por ano.",
    "data": {
        "url": "https://raw.githubusercontent.com/wendellandrey7-afk/trabalho-do-csv/refs/heads/main/dados-desigualdade-racial-br-01.csv"
    },
    "transform": [
        {
            "calculate": "datum['%_taxa_homicidio']",
            "as": "taxa_homicidio"
        }
    ],
    "mark": "bar",
    "width": 500,
    "height": 350,
    "encoding": {
        "x": {
            "field": "ano",
            "type": "nominal",
            "axis": {"labelAngle": 0}
        },
        "y": {
            "field": "%_taxa_homicidio",
            "aggregate": "median",
            "type": "quantitative"
        }
    }
};

vegaEmbed('#grafico02', grafico02);
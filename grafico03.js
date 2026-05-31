var grafico03 = {
    "$schema": "https://vega.github.io/schema/vega-lite/v6.json",
    "title": "Taxa Média de Desocupação por Região do Brasil",
    "data": {
        "url": "https://raw.githubusercontent.com/wendellandrey7-afk/trabalho-do-csv/refs/heads/main/dados-desigualdade-racial-br-01.csv"
    },

    "transform": [
    {
        "calculate": "datum['%_desocupacao']",
        "as": "indice_desocupacao"
    }
],

    "width": 500,
    "height": 200,
    "mark": "bar",
    "encoding": {
        "x": {"field": "regiao", "type": "nominal", "axis": {"labelAngle": 0}},
        "y": {
        "field": "indice_desocupacao",
        "aggregate": "mean",
        "type": "quantitative"
        },
    "color": {"field": "regiao", "type": "nominal"}
    },
    "tooltip": [
            {
                "field": "regiao",
                "type": "nominal",
                "title": "Região"
            },
            {
                "field": "indice_desocupacao",
                "aggregate": "mean",
                "type": "quantitative",
                "title": "Taxa Média de Desocupação"
        }
    ]
};
vegaEmbed('#grafico03', grafico03);

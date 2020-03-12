function mapdata() {
  let nodes = [];
  let edges = [];

  // Write your logic here...
  let rowsCols = 2;
  let i, j;

  for (i = 0; i < rowsCols; i++) {
    for (j = 0; j < rowsCols; j++) {
      nodes.push({
        data: {
          id: `N${i}-${j}`
        }
      });

      if (i + 1 < rowsCols) {
        edges.push({
          data: {
            id: `N${i}-${j}S`,
            source: `N${i}-${j}`,
            target: `N${i + 1}-${j}`
          }
        });
      }

      if (j + 1 < rowsCols) {
        edges.push({
          data: {
            id: `N${i}-${j}E`,
            source: `N${i}-${j}`,
            target: `N${i}-${j + 1}`
          }
        });
      }

      if (i - 1 >= 0) {
        edges.push({
          data: {
            id: `N${i}-${j}N`,
            source: `N${i}-${j}`,
            target: `N${i - 1}-${j}`
          }
        });
      }

      if (j - 1 >= 0) {
        edges.push({
          data: {
            id: `N${i}-${j}W`,
            source: `N${i}-${j}`,
            target: `N${i}-${j - 1}`
          }
        });
      }


      if (i + 1 < rowsCols && j + 1 < rowsCols) {
        edges.push({
          data: {
            id: `N${i}-${j}ES`,
            source: `N${i}-${j}`,
            target: `N${i + 1}-${j + 1}`
          }
        });
      }
      if (i - 1 >= 0 && j - 1 >= 0) {
        edges.push({
          data: {
            id: `N${i}-${j}WN`,
            source: `N${i}-${j}`,
            target: `N${i - 1}-${j - 1}`
          }
        });
      }



      if (j - 1 >= 0 && i + 1 < rowsCols) {
        edges.push({
          data: {
            id: `N${i}-${j}WS`,
            source: `N${i}-${j}`,
            target: `N${i + 1}-${j - 1}`
          }
        });
      }
      if (j + 1 < rowsCols && i - 1 >= 0) {
        edges.push({
          data: {
            id: `N${i}-${j}WN`,
            source: `N${i}-${j}`,
            target: `N${i - 1}-${j + 1}`
          }
        });
      }



    }
  }
  console.log(edges.length)

  elements = {
    nodes,
    edges
  };
  return elements;
}
module.exports.mapdata = mapdata;
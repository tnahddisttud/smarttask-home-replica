module.exports = (targetOptions, indexHtml) => {
  const i = indexHtml.indexOf("</body>");
  const config = `<p>Configuration: ${JSON.stringify(
    targetOptions,
    null,
    2
  )}</p>`;
  return `${indexHtml.slice(0, i)}
              ${config}
              ${indexHtml.slice(i)}`;
};

function extracFiles(filePath){
    let parts = filePath.split('\\').pop();
    let lastDotIdx = parts.lastIndexOf('.');

    let fileName= parts.slice(0,lastDotIdx);
    let fileExtension = parts.slice(lastDotIdx+1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
// extracFiles('C:\\Internal\\training-internal\\Template.pptx');

extracFiles('C:\\Projects\\Data-Structures\\LinkedList.cs');
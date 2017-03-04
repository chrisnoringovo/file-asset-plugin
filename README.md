# How to use 
## Look up implentation in Android
```
    String getText(fromPath){
        StringBuilder text = new StringBuilder();

        try {
            AssetManager am = context.getAssets();
            InputStream is = am.open(fromPath);

            BufferedReader br = new BufferedReader(is);

                BufferedReader br = new BufferedReader(is);  
                String line;   
                while ((line = br.readLine()) != null) {
                            text.append(line);
                            Log.i("Test", "text : "+text+" : end");
                            text.append('\n');
                            } 
        }
        catch (IOException e) {
            e.printStackTrace();                    
        }
        finally{
            br.close();
        }       

        return text.toString();
    }
```

We can pretty much `translate` this into javascript.
However we need to use the fully qualified namespace so these

- StringBuilder
- File
- Environment
- BufferedReader
- AssetManager
- InputStream

### Look up namespace in Android SDK
```
https://developer.android.com/reference/packages.html
```

Need to become

- java.lang.StringBuilder
- java.io.InputStream
- android.content.res.AssetManager
- android.os.Environment
- java.io.BufferedReader

And obviously we can't be writing `File sdcard` but need to do `let sdcard:android.io.File` or even `const sdcard`.

### Translating the code
So let's translate the code :

```
let utils = require("utils/utils");

function getText(fromPath): string {
    const text = new java.lang.StringBuilder();
    let bufferedReader: java.io.BufferedReader;
    let inputStream: InputStream;

    try {
        let assetManager = utils.ad.getApplicationContext().getAssets();
        inputStream = am.open(fromPath);

            bufferedReader = new java.io.BufferedReader(inputStream);
            let line: string = '';
            while ((line = bufferedReader.readLine()) != null) {
                        text.append(line);
                        android.util.Log.i('Test', `text : ${text} : end`);
                        text.append('\n');
                        }
    }
    catch (e) {
        e.printStackTrace();
    }
    finally {
        br.close();
    }

    return text.toString();
}

module.exports = getText;
```

String getText(fromPath){
    StringBuilder text = new StringBuilder();

    try {
        AssetManager am = context.getAssets();
        InputStream is = am.open("test.txt");

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

 
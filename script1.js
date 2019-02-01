<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>G&eacute;rer les cookies en JavaScript</title>
    <script type="text/javascript">
        <!--
            function scookie(name,value,days)
            {
                var expire=new Date();
                expire.setDate(expire.getDate()+days);
                document.cookie=name+'='+escape(value)+';expires='+expire.toGMTString();
                return true;
            }
            function gcookie(name)
            {
                if(document.cookie.length>0)
                {
                    start=document.cookie.indexOf(name+"=");
                    pos = start+name.length+1;
                    if(start!=0)
                    {
                        start=document.cookie.indexOf("; "+name+"=");
                        pos = start+name.length+3;
                    }
                    if(start!=-1)
                    { 
                        start=pos;
                        end=document.cookie.indexOf(";",start);
                        if(end==-1)
                        {
                            end=document.cookie.length;
                        }
                        return unescape(document.cookie.substring(start,end));
                    } 
                }
                return '';
            }
        -->
        </script>
    </head>
    <body>

<input type="button" value="R&eacute;cup&eacute;rer le cookie" onclick="alert(gcookie('cookies_test_1'));" /><br />
    <input type="text" id="new_val" /> <input type="button" value="Changer/cr&eacute;er le cookie" onclick="scookie('cookies_test_1',document.getElementById('new_val').value, 5);" /><br />
    <input type="button" value="Supprimer le cookie" onclick="scookie('cookies_test_1','', -1);" /><br />
    M&ecirc;me si vous rafraichissez la page ou que vous fermer votre navigateur, le cookie restera enregistr&eacute;e jusqu'&agrave; ce que vous le supprimiez ou jusqu'&agrave; ce qu'il expire.
    </body>
</html>

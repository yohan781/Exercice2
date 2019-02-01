CTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Se souvenir d'un visiteur</title>
    </head>
    <body>
        Bonjour <strong id="visit_name">anonyme</strong>,<br />
        Ceci est votre visite N&deg; <strong id="nb_visits">1</strong>.<br />
        <input type="button" value="Supprimer mes informations" onclick="scookie('visit_name','',-1);scookie('nb_visits','',-1);" /><br />
        M&ecirc;me si vous rafraichissez la page ou que vous fermer votre navigateur, le cookie restera enregistr&eacute;e jusqu'&agrave; ce que vous le supprimiez ou jusqu'&agrave; ce qu'il expire.
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
                        if(gcookie('visit_name')=='' || gcookie('nb_visits')=='')
                        {
                                name = prompt('Quel est votre nom?','anonyme');
                                if(name=='')
                                {
                                        name='anonyme';
                                }
                                scookie('visit_name',name,100);
                                nb_visits=1;
                        }
                        else
                        {
                                name=gcookie('visit_name');
                                nb_visits = Number(gcookie('nb_visits'))+1;
                        }
                        scookie('nb_visits',nb_visits,100);
                        document.getElementById('visit_name').innerHTML=name;
                        document.getElementById('nb_visits').innerHTML=nb_visits;
                -->
                </script>
    </body>
</html>

/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Registrar-se */
    
    
        /* listitem  Registrar-se */
    $(document).on("click", ".uib_w_4", function(evt)
    {
         /*global activate_page */
         activate_page("#login_page"); 
    });
    
        /* listitem  Login */
    $(document).on("click", ".uib_w_3", function(evt)
    {
         /*global activate_page */
         activate_page("#registro_page"); 
    });
    
        /* button  #back */
    
    
        /* button  #back */
    
    
        /* button  #menu_lateral */
    $(document).on("click", "#menu_lateral", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#barra_lateral"));  
    });
    
        /* button  Entrar */
    $(document).on("click", ".uib_w_17", function(evt)
    {
         /*global activate_page */
         activate_page("#home_page"); 
    });
    
        /* button  #back */
    
    
        /* button  #back */
    
    
        /* button  #back */
    
    
        /* button  #back */
    
    
        /* button  #back */
    
    
        /* button  #back */
    $(document).on("click", "#back", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #Sair */
    
    
        /* button  #Sair */
    $(document).on("click", "#Sair", function(evt)
    {
         /*global activate_page */
         activate_page("#mainpage"); 
    });
    
        /* button  #publicacoes */
    $(document).on("click", "#publicacoes", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#home_pagesub"); 
    });
    
        /* button  #buscar */
    $(document).on("click", "#buscar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#busca_pagesub"); 
    });
    
        /* button  #back */
    $(document).on("click", "#back", function(evt)
    {
         /*global uib_sb */
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($("#barra_lateral"));  
    });
    
        /* button  #back */
    $(document).on("click", "#back", function(evt)
    {
         /*global activate_page */
         activate_page("#home_page"); 
    });
    
        /* button  #contatos */
    $(document).on("click", "#contatos", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#contatos_pagesub"); 
    });
    
        /* button  #publicacoes */
    $(document).on("click", "#publicacoes", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#home_pagesub"); 
    });
    
        /* button  #buscar */
    $(document).on("click", "#buscar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#busca_pagesub"); 
    });
    
        /* button  #contatos */
    $(document).on("click", "#contatos", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#contatos_pagesub"); 
    });
    
        /* button  #publicacoes */
    $(document).on("click", "#publicacoes", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#home_pagesub"); 
    });
    
        /* button  #buscar */
    $(document).on("click", "#buscar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#busca_pagesub"); 
    });
    
        /* button  #contatos */
    $(document).on("click", "#contatos", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#contatos_pagesub"); 
    });
    
        /* button  #pesquisar */
    $(document).on("click", "#pesquisar", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#resultado_pagesub"); 
    });
    
        /* button  #contatos */
    $(document).on("click", "#contatos", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#contatos_pagesub"); 
    });
    
        /* button  #busca */
    $(document).on("click", "#busca", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#busca_pagesub"); 
    });
    
        /* button  #publicacoes */
    $(document).on("click", "#publicacoes", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#home_pagesub"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();

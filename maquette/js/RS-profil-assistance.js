$(document).ready(function() {

    //CODE GENERAL DES NAVBARS / COMMENTAIRES / CHATBOX
    $(".notification-parent").click(function() {
        $(".notification-enfant").fadeToggle(1000);
        $(".notifications-message-dropdown").css("display", "none");
        $(".notifications-relation-dropdown").css("display", "none");
        $(".notifications-recommandation-dropdown").css("display", "none");
    });

    $(".btn-assistance").css({
        'background': '#336699',
        'border': 'none',
        'color': 'white'
    })

    $(".shopping-parent").click(function() {
        $(".shopping-enfant").fadeToggle(1000);
    });

    $(".service-parent").click(function() {
        $(".service-enfant").fadeToggle(1000);
    });

    $(".coment").click(function() {
        $(".couverture-du-commentaire").fadeIn(1000);
        $(".boite-de-commantaires").fadeIn(1000);
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").fadeOut(1000);
        $(".boite-de-commantaires").fadeOut(1000);
    });

    $(".un-container-d-un-ami-connecte").click(function() {
        $(".grand-block-du-chat").fadeIn(1000);
    });

    $(".block-d-un-ami-connecte").click(function() {
        $(".grand-block-du-chat").fadeIn(1000);
    });

    $(".button-fermer").click(function() {
        $(".grand-block-du-chat").fadeOut(1000);
    });




    //CODE DU CLICK SUR LES ICONS DE MESSAGES / RELATIONS / RECOMMANDATIONS
    $(".nav-item-notifications-messages").click(function() {
        $(".notifications-message-dropdown").fadeToggle(300);
        $(".notifications-relation-dropdown").css("display", "none");
        $(".notifications-recommandation-dropdown").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });

    $(".nav-item-notifications-relations").click(function() {
        $(".notifications-relation-dropdown").fadeToggle(300);
        $(".notifications-message-dropdown").css("display", "none");
        $(".notifications-recommandation-dropdown").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });

    $(".nav-item-notifications-recommandations").click(function() {
        $(".notifications-recommandation-dropdown").fadeToggle(300);
        $(".notifications-message-dropdown").css("display", "none");
        $(".notifications-relation-dropdown").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });



    //MENU MOBILE
    $(".mobile-menu").click(function() {
        $(".dropdownOfMenu").toggle();/*nouveau*/
        $(".popup-creation-de-groupe").css("display", "none");
        $(".container-full-list-des-communautes").css("display", "none");
        $(".couverture-du-commentaire").css("display", "none");
    });

    $(".container-des-notifications-mobile").click(function() {
        $(".dropdownOfNotifications").toggle(500);
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");

    });

    $(".notifs-messages").click(function() {
        $(".dropdownOfNotifications").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "block");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });

    $(".notifs-relations").click(function() {
        $(".dropdownOfNotifications").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "block");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });

    $(".notifs-recommandations").click(function() {
        $(".dropdownOfNotifications").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "block");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
    });



    //DROPDOWN DE LA BARRE DE RECHERCHE DES AMIS
    $(".search-box").click(function() {
        $(".searchbar-dropdown").css("display", "block");
        $(".couverture-du-commentaire").css("background", "transparent");
        $(".couverture-du-commentaire").css("display", "block");
    });

    $(".search-box").mouseleave(function() {
        $(".searchbar-dropdown").css("margin-left", "-1.5%");
    });

    $(".search-box").mouseover(function() {
        $(".searchbar-dropdown").css("margin-left", "");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".searchbar-dropdown").css("display", "none");
        $(".couverture-du-commentaire").css("background", "");
        $(".couverture-du-commentaire").css("display", "none");
    });


    //CODE DE LA POPUP SIGNALER LE USER
    $(".signaler-user").click(function() {
        $(".block-menu-publication").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-signaler-user").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP SIGNALER LA PUBLICATION
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-signaler-user").css("display", "none");
    });


    //CODE DE LA POPUP DESABONNEMENT D'UN USER
    $(".desabonner-user").click(function() {
        $(".block-menu-publication").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-desabonnement").css("display", "block");
    });
    //CODE AU CLICK DU BOUTTON "OUI" SE DESABONNER DU USER
    $(".btn-oui-desabonnement").click(function() {
        $(".btn-unfollow").css("display", "none");
        $(".menu-option-already-friend").css("display", "none");
        $(".option-block-already-friend").css("display", "none");
        $(".btn-follow").css("display", "block");
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-supprimer-publication").css("display", "none");
        $(".popup-signaler-user").css("display", "none");
        $(".popup-desabonnement").css("display", "none");
        $(".popup-quitter-communaute").css("display", "none");
        
    });
    //CODE DE FERMETTURE DE LA POPUP DESABONNEMENT D'UN USER
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-desabonnement").css("display", "none");
    });


    //CODE DE FERMETTURE DE TOUTE LES POPUP EN CLIQUANT SUR LE BOUTON "NON"
    $(".btn-non").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-signaler-user").css("display", "none");
        $(".popup-desabonnement").css("display", "none");
        
    });



    //CODE DE LA DROPDOWN DE DECONNEXION
    $(".logout-bouton").click(function() {
        $(".couverture-du-commentaire").css({
            'display': 'block',
            'background': 'rgba(39, 55, 70, .7)'
        });
        $(".dropdown-deconnexion").slideDown(500);
        $(".dropdownOfMenu").css("display", "none");/*nouveau*/
    });
    //CODE DE FERMETTURE DE LA DROPDOWN DE DECONNEXION
    $(".closedropsownDeconnexion").click(function() {
        $(".dropdown-deconnexion").slideUp(500);
        $(".couverture-du-commentaire").css('background', '');
        $(".couverture-du-commentaire").fadeOut(1000);
    });
    $(".couverture-du-commentaire").click(function() {
        $(".dropdown-deconnexion").slideUp(500);
        $(".couverture-du-commentaire").css('background', '');
        $(".couverture-du-commentaire").fadeOut(1000);
    });



    //CODE DE POPUP AFFICHAGE DE A PROPOS
    $(".carre-block-apropos").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popoup-a-propos").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popoup-a-propos").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });



    //POPUP DU DASHBORD DE L'ASSISTANT DEBUT
    $(".voir-mon-dashboard-btn").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".container-box-dashboard").css("display", "block");
    });
    //POPUP DU DASHBORD DE L'ASSISTANT FIN
    $(".couverture-du-commentaire").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").css("display", "none");
        $(".container-box-dashboard").css("display", "none");
    });


    //POPUP STATISTIQUES DEBUT
    $(".voir-mes-statistiques-btn").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".container-box-statistiques").css("display", "block");
    });
    //POPUP STATISTIQUES FIN
    $(".couverture-du-commentaire").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").css("display", "none");
        $(".container-box-statistiques").css("display", "none");
    });


    //CODE DE POPUP FAIRE UNE RECOMMANDATION
    $(".btn-recommandation").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-faire-une-recommandation").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-faire-une-recommandation").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });


    //CODE AU CLICK DU BOUTTON S'ABONNER A UN UTILISATEUR
    $(".btn-follow").click(function() {
        $(".btn-unfollow").css("display", "block");
        $(".menu-option-already-friend").css("display", "block");
        $(".btn-follow").css("display", "none");
    });

    //CODE SE DESABONNER OU SIGNALER LE COMPTE DU USER
    $(".menu-option-already-friend").click(function() {
        $(".option-block-already-friend").toggle();
    });

    //CODE ASSISTANCE
    $(".les-assistances").click(function() {

        $(".btn-mails-admins").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-ecrire-admin").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-assistance").css({
            'background': '#336699',
            'border': 'none',
            'color': 'white'
        })

        $(".block-ecrire-admin-div").css("display", "none")
        $(".block-mails-admins-div").css("display", "none")
        $(".block-assistance-div").css("display", "block")
    });


    $(".mails-admins").click(function() {

        $(".btn-assistance").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-ecrire-admin").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-mails-admins").css({
            'background': '#336699',
            'border': 'none',
            'color': 'white'
        })

        $(".block-ecrire-admin-div").css("display", "none")
        $(".block-assistance-div").css("display", "none")
        $(".block-mails-admins-div").css("display", "block")
    });


    $(".ecrire-admin").click(function() {

        $(".btn-assistance").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-mails-admins").css({
            'background': '',
            'border': '',
            'color': ''
        })

        $(".btn-ecrire-admin").css({
            'background': '#336699',
            'border': 'none',
            'color': 'white'
        })

        $(".block-mails-admins-div").css("display", "none")
        $(".block-assistance-div").css("display", "none")
        $(".block-ecrire-admin-div").css("display", "block")
    });


    //CODE DE LA POPUP DES DETAILS SUR UNE ASSISTANCE DEMANDEE
    $(".btn-details").click(function() {
        $(".couverture-du-commentaire").fadeIn(200);
        $(".container-une-assistance").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").fadeOut(100);
        $(".container-une-assistance").css("display", "none");
    });




    //CODE D'OUVERTURE DE LA COUVERTURE DE CHANGEMENT DE LA PHOTO DE PROFIL
    $(".div-profil").mouseover(function() {
        $(".cover-modification-photo-profil").css("display", "block");
    });
    //CODE DE FERMETTURE COUVERTURE DE CHANGEMENT DE LA PHOTO DE PROFIL
    $(".div-profil").mouseleave(function() {
        $(".cover-modification-photo-profil").css("display", "none");
    });





    //CODE D'APPARITION DE LA POPUP DE PREVIEW DE TELECHARGEMENT DE LA PHOTO DE PROFIL
    $(".cover-modification-photo-profil").click(function() {
        $(".cover-modification-photo-profil").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-preview-photo-de-profil").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP DE PREVIEW DE TELECHARGEMENT DE LA PHOTO DE PROFIL
    $(".btn-annuler").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-preview-photo-de-profil").css("display", "none");
    });
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-preview-photo-de-profil").css("display", "none");
    });


});
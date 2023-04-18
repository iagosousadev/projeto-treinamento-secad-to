<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style type="text/css">
      * {
        margin: 0;
        padding: 0;
        font-size: 100%;
        font-family: "Helvetica Neue", Helvetica, Helvetica, Arial, sans-serif;
        line-height: 1.65;
        text-align: center;
      }

      img {
        width: 100%;
        margin: 0 auto;
        display: block;
      }

      .table-wrap {
        width: 100% !important;
        height: 100%;
        background: #fff;
        text-align: center;
      }

      .container {
        display: block !important;
        margin: 0 auto !important;
        max-width: 580px !important;
        padding: 0;
        width: 100%;
      }

      .content {
        display: block !important;
        margin: 0 auto !important;
        max-width: 520px !important;
        padding: 30px 30px;
        width: 100%;
      }

      a {
        color: #008DF6;
        text-decoration: none;
      }

      .titulo {
        color: #008DF6;
        font-size: 22px;

      }

      p {
        font-size: 16px;
        font-weight: normal;
        margin-bottom: 20px;
        color: #4B4B4D;
      }

      .text-center {
        text-align: center;
      }

      .authentication-code {
          font-weight: bold;
          font-size: 18px;
      }

      .authentication-code span {
          margin: 0 4px 0 4px;
      }
    </style>
</head>

<body>
<table class="table-wrap">
    <tr class="container" bgcolor="#DCF0F1">
        <td>
            <img src="cid:headerImageCid" alt="E-mail Cronapp Header"/>
        </td>
    </tr>
    <tr class="content" bgcolor="#DCF0F1">
        <td>
            <p class="titulo">
                Uma solicitação de redefinição de senha foi gerada para ${email}.
            </p>
            <p>
                <#if oneTimePassword?has_content>
                    <div class="authentication-code">${oneTimePassword[0..2]}<span></span>${oneTimePassword[3..5]}<span></span>${oneTimePassword[6..8]}</div>
                    Este é seu Código de Autenticação. Use este código em seu dispositivo para redefinir sua senha
                <#else>
                    <a href="${link}">Clique aqui para redefinir sua senha</a>
                </#if>
            </p>
            <p>
                Se você não fez esta solicitação, por favor ignore esta mensagem e sua senha antiga continuará a
                funcionar.
            </p>
            <p>
                Obrigado,<br/>
                Equipe Cronapp
            </p>
        </td>
    </tr>
    <tr class="container" bgcolor="#DCF0F1">
        <td>
            <img src="cid:footerImageCid" alt="E-mail Cronapp Footer"/>
        </td>
    </tr>
</table>
</body>
</html>
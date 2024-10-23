 const outBtn =  new LogoutButton;
 outBtn.LogoutButton = ApiConnector.logout(respons, () => location.reload());
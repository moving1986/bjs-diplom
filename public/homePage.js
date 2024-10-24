const outBtn = new LogoutButton();
outBtn.action = () => ApiConnector.logout(response => {
    if(response.success) {
        location.reload();
    } else {
        userForm.setLoginErrorMessage(response.error);
    };
});

const board = new RatesBoard();
function stockNow() {
    ApiConnector.getStocks(response => {
        if(response.success) {
            board.clearTable();
            board.fillTable(response.data);
        }
    });
};
stockNow();
setInterval(stockNow, 5000);


ApiConnector.current(response => {
    if(response.success) {
        ProfileWidget.showProfile(response.data)
    }
});

const moneyManager = new MoneyManager();

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Mgr', {
        // 열 (Column) 정의
        mgrSqno : {
            type : DataTypes.INTEGER
            , primaryKey : true
            , autoIncrement : true
            , comment : "사이트 관리자 구분 번호"
        },
        mgrId : {
            type : DataTypes.STRING
            , allowNull : false
            , comment : "사이트 관리자의 로그인 시 입력 아이디"
        },
        mgrPwd : {
            type : DataTypes.STRING
            , allowNull : false
            , comment : "사이트 관리자의 로그인 시 입력 비밀번호"
        },
        mgrNm : {
            type : DataTypes.STRING
            , allowNull : false
            , comment : "사이트 관리자의 이름"
        },
        mgrBymd : {
            type : DataTypes.STRING
            , allowNull : false
            , comment : "사이트 관리자의 생년월일(yyyymmdd)"
        },
        mgrPhoneNum : {
            type : DataTypes.STRING
            , allowNull : false
            , comment : "사이트 관리자의 핸드폰 번호(010xxxxyyyy)"
        }
    });
 }
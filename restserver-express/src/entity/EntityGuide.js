module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Model_name', {
        // 열 (Column) 정의
        _id: { // 열 이름
           type: DataTypes.INTEGER, // 자료형 INTEGER, FLOAT, STRING
           primaryKey: true, // Primary Key 여부
           autoIncrement: true, // 자동증가 여부. 기본값 false
           comment: '문제 고유 ID', // 열에 대한 설명
       },
       question: { // 열 이름
           type: DataTypes.STRING(200), // 자료형
           allowNull: false, // Null 허용 여부
           comment: '문제', // 설명
       }
    });
 }

 /*
 --- freezeTableName
 모델에 대한 테이블명을 모델명 그대로 사용하도록 합니다. 
Sequelize는 모델명을 단수로 이해하며, 테이블명은 복수로 다룹니다. 
예를 들어 모델명이 user라면 테이블명은 users로 생성하고 조회합니다. 만약 tmp와 같이 복수로 만들지 않아도 되는 모델이 있다면 이 옵션을 true로 지정하여 복수형 변환을 하지 않도록 설정할 수 있습니다. 
기본값은 물론 false입니다.

 --- timestamps
    reatedAt열과 updatedAt열을 추가할지 여부입니다. 
    이 옵션이 활성화되면 자동으로 createdAt열과 updatedAt열을 생성하고 데이터가 생성되었을 때와 수정되었을 때에 자동으로 갱신됩니다. 
    만약 false로 지정하면 이 열을 생성하지 않습니다. 
    기본값은 true입니다.
 */
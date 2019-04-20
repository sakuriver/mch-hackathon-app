// ランド名の取得ロジック
function getLandNameByLandType(landType) {
    // ランド名を判定
    if (landType == 1) {
        landName = "Ocean";
    } else if (landType == 2) {
        landName = "Strawberry";
    } else if (landType == 3) {
        landName = "Tangerine";
    } else if (landType == 4) {
        landName = "Lime";
    } else if (landType == 5) {
        landName = "Graphite";
    } else if (landType == 6) {
        landName = "Grape";
    } else if (landType == 7) {
        landName = "Sage";
    } else if (landType == 8) {
        landName = "Blueberry";
    } else if (landType == 9) {
        landName = "Ruby";
    }
    return landName;
}
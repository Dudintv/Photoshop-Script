#target photoshop
app.bringToFront(); // запускаем Photoshop. Если он уже запущен, подключимся именно к нему, не к новому инстансу.

var doc =  app.activeDocument;

---------------------------------------------------------------------------------------------------------------------

//
// Сохранение едениц измерения:
//

var defaultRulerUnits = preferences.rulerUnits; 
preferences.rulerUnits = Units.PIXELS;
// do something...
preferences.rulerUnits = defaultRulerUnits;

---------------------------------------------------------------------------------------------------------------------

//всякие альтернативные стартовые строки
#target estoolkit

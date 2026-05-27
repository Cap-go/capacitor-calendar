package app.capgo.calendar.models.results

import com.getcapacitor.JSObject
import app.capgo.calendar.models.templates.JSResult

class ModifyEventWithPromptResult : JSResult {
    override fun toJSON(): JSObject {
        val result = JSObject()
        result.put("result", null)
        return result
    }
}

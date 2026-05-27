package app.capgo.calendar.models.results

import com.getcapacitor.JSObject
import app.capgo.calendar.models.templates.JSResult

class CreateEventWithPromptResult : JSResult {
    override fun toJSON(): JSObject {
        val result = JSObject()
        result.put("id", null)
        return result
    }
}

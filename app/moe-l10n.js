/*
*  This file is part of Moeditor.
*
*  Copyright (c) 2016 Menci <huanghaorui301@gmail.com>
*  Copyright (c) 2016 lucaschimweg
*  Copyright (c) 2016 douglaseccker
*  Copyright (c) 2016 PifyZ
*
*  Moeditor is free software: you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation, either version 3 of the License, or
*  (at your option) any later version.
*
*  Moeditor is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  You should have received a copy of the GNU General Public License
*  along with Moeditor. If not, see <http://www.gnu.org/licenses/>.
*
*  The translation providers:
*   - en: Menci
*   - zh_CN: Menci
*   - de: lucaschimweg
*   - pt: douglaseccker
*   - fr: PifyZ
*
*  If you want to help translate this app, please copy the `en` items of the
*  `strings` constant as the template, and fill each item with the translated
*  string.
*
*  If you are translating this app to a new language, please add the language to
*  `MoeditorLocale.getLanguages()`.
*
*  You can translate for a language (e.g. en) or a language with specified
*  region (e.g. zh_CN). The app will choose the language with specified region
*  first, fallback to only language when the former is unavailable, and fallback
*  to English when they are all unavailable.
*
*  Send a PR to us after translating.
*
*/

'use strict'

const osLocale = require('os-locale');

class MoeditorLocale {
	constructor() {
        if (moeApp.config.get('locale') !== 'default') {
            this.locale = moeApp.config.get('locale');
        } else {
            this.locale = 'default';
        }

        this.sysLocale = osLocale.sync();
        if (typeof strings[this.sysLocale] === 'undefined') {
            this.sysLocale = this.sysLocale.substr(0, this.sysLocale.indexOf('_'));
            if (typeof strings[this.sysLocale] === 'undefined') {
                this.sysLocale = '';
            }
        }

        if (this.locale === 'default') {
            this.locale = this.sysLocale;
        }
	}

    setLocale(locale) {
        this.locale = locale;
        if (this.locale === 'default') {
            this.locale = this.sysLocale;
        }
    }

	get(str) {
        let res;
		if (typeof strings[this.locale] === 'undefined' || typeof strings[this.locale][str] === 'undefined') {
            res = strings['en'][str];
            console.log('Localization of "' + str + '" in "' + this.locale + '" failed, falling back to English.');
        } else {
            res = strings[this.locale][str];
        }
        return res;
	}

    getLanguages() {
        let languages = {
            "en": "English",
            "zh_CN": "Simplified Chinese",
            "de": "German",
            "pt": "Portuguese",
            "he": "Hebrew",
            "fr": "French"
        };
        for (let language in languages) {
            const localized = this.get(languages[language]);
            if (languages[language] !== localized) languages[language] = localized + ' (' + languages[language] + ')';
        }
        return languages;
    }
}

module.exports = MoeditorLocale;

const strings = {
	"en": {
        "New": "New",
        "Open": "Open",
        "Save": "Save",
        "Save as": "Save as",
        "Export as HTML": "Export as HTML",
        "Export as PDF": "Export as PDF",
        "Settings": "Settings",
        "About": "About",

        "Menu": "Menu",
        "Directory": "Directory",
        "Toggle focus mode": "Toggle focus mode",
        "Edit mode": "Edit mode",

        "Write Mode": "Write Mode",
        "Read Mode": "Read Mode",
        "Preview Mode": "Preview Mode",
        "Wide": "Wide",
        "Medium": "Medium",
        "Narrow": "Narrow",

        "Yes": "Yes",
        "No": "No",
        "Cancel": "Cancel",
        "Confirm": "Confirm",

        "Save changes to file?": "Save changes to file?",
        "File changed by another program, reload?": "File changed by another program, reload?",

        "Markdown Documents": "Markdown Documents",
        "HTML Documents": "HTML Documents",
        "PDF Documents": "PDF Documents",
        "CSS Files": "CSS Files",
        "All Files": "All Files",
        "Saved successfully.": "Saved successfully.",
        "Can't save file": "Can't save file",
        "Exporting as HTML, please wait ...": "Exporting as HTML, please wait ...",
        "Exporting as PDF, please wait ...": "Exporting as PDF, please wait ...",
        "Can't export as HTML": "Can't export as HTML",
        "Can't export as PDF": "Can't export as PDF",

        "General": "General",
        "Edit": "Edit",
        "Appearance": "Appearance",
        "Render": "Render",
        "Language": "Language",
        "Reload when file changed": "Reload when file changed",
        "Font": "Editor Font",
        "Font Size": "Font Size",
        "Line Height": "Line Height",
        "Tab Size": "Tab Size",
        "Color Theme": "Color Theme",
        "TeX Math Expressions":"TeX Math Expressions",
        "UML Diagrams": "UML Diagrams",
        "Highlight Theme": "Highlight Theme",
        "Render Theme": "Render Theme",
        "Custom CSSs": "Custom CSSs",

        "Default": "Default",
        "System Default": "System Default",

        "version": "version",

        "English": "English",
        "Simplified Chinese": "Simplified Chinese",
        "German": "German",
        "Portuguese": "Portuguese",
        "French": "French",
        "Hebrew": "Hebrew",

        "Auto": "Auto",
        "Prompt": "Prompt",
        "Never": "Never",

        "Undo": "Undo",
        "Redo": "Redo",
        "Cut": "Cut",
        "Copy": "Copy",
        "Paste": "Paste",
        "Delete": "Delete",
        "Select All": "Select All",

        "Services": "Services",
        "Hide": "Hide",
        "Hide Others": "Hide Others",
        "Show All": "Show All",
        "Quit": "Quit",
        "Close": "Close",
        "Minimize": "Minimize",
        "Zoom": "Zoom",
        "Bring All to Front": "Bring All to Front",
        "File": "File",
        "Export": "Export",
        "Mode": "Mode",
        "View": "View",
        "Window": "Window",
        "Help": "Help",
        "Toggle Developer Tools": "Toggle Developer Tools",
        "Preference": "Preference"
	},
    "he": {
        "New": "חדש",
        "Open": "פתח",
        "Save": "שמור",
        "Save as": "שמור בשם",
        "Export as HTML": "יצא כ-HTML",
        "Export as PDF": "יצא כ-PDF",
        "Settings": "הגדרות",
        "About": "אודות",

        "Menu": "תפריט",
        "Directory": "תיקיה",
        "Toggle focus mode": "שנה מצב מיקוד",
        "Edit mode": "מצב עריכה",

        "Write Mode": "מצב כתיבה",
        "Read Mode": "מצב קריאה",
        "Preview Mode": "מצב תצוגה מקדימה",
        "Wide": "רחב",
        "Medium": "בינוני",
        "Narrow": "צר",

        "Yes": "כן",
        "No": "לא",
        "Cancel": "ביטול",
        "Confirm": "אישור",

        "Save changes to file?": "האם לשמור את השינויים לקובץ?",
        "File changed by another program, reload?": "הקובץ שונה על ידי תוכנה אחרת. לטעון מחדש?",

        "Markdown Documents": "מסמכי Markdown",
        "HTML Documents": "מסמכי HTML",
        "PDF Documents": "מסמכי PDF",
        "CSS Files": "קבצי CSS",
        "All Files": "כל הקבצים",
        "Saved successfully.": "הקובץ נשמר בהצלחה.",
        "Can't save file": "שמירת הקובץ נכשלה.",
        "Exporting as HTML, please wait ...": "מייצא ל-HTML, אנא המתן...",
        "Exporting as PDF, please wait ...": "מייצא ל-PDF, אנא המתן...",
        "Can't export as HTML": "הייצוא ל-HTML נכשל.",
        "Can't export as PDF": "הייצוא ל-PDF נכשל.",

        "General": "כללי",
        "Edit": "עריכה",
        "Appearance": "נראות",
        "Render": "מנוע רינדור",
        "Language": "שפה",
        "Reload when file changed": "טעינה מחדש כשהקובץ משתנה",
        "Font": "גופן",
        "Font Size": "גודל גופן",
        "Line Height": "גובה שורה",
        "Tab Size": "גודל טאב",
        "Color Theme": "ערכת נושא לעריכה",
        "TeX Math Expressions":"ביטויים מתמטיים ב-TeX",
        "UML Diagrams": "דיאגרמות UML",
        "Highlight Theme": "ערכת נושא להדגשה",
        "Render Theme": "ערכת נושא לרינדור",
        "Custom CSSs": "CSS בהתאמה אישית",

        "Default": "ברירת מחדל",
        "System Default": "ברירת מחדל של המערכת",

        "version": "גירסה",

        "English": "אנגלית",
        "Simplified Chinese": "סינית פשוטה",
        "German": "גרמנית",
        "Portuguese": "פורטוגזית",
        "French": "צרפתית",
        "Hebrew": "עברית",

        "Auto": "אוטומטי",
        "Prompt": "שאל לפני",
        "Never": "אף פעם",

        "Undo": "בטל פעולה אחרונה",
        "Redo": "בצע מחדש",
        "Cut": "גזור",
        "Copy": "העתק",
        "Paste": "הדבק",
        "Delete": "מחק",
        "Select All": "בחר הכל",

        "Services": "שירותים",
        "Hide": "הסתר",
        "Hide Others": "הסתר אחרים",
        "Show All": "הצג הכל",
        "Quit": "צא",
        "Close": "סגור",
        "Minimize": "מזער",
        "Zoom": "זום",
        "Bring All to Front": "הבא הכל לקידמה",
        "File": "קובץ",
        "Export": "יצא",
        "Mode": "מצב",
        "View": "תצוגה",
        "Window": "חלון",
        "Help": "עזרה",
        "Toggle Developer Tools": "כלי מפתחים",
        "Preference": "העדפות"
	},
    "zh_CN": {
        "New": "新建",
        "Open": "打开",
        "Save": "保存",
        "Save as": "另存为",
        "Export as HTML": "导出为 HTML",
        "Export as PDF": "导出为 PDF",
        "Settings": "设置",
        "About": "关于",

        "Menu": "菜单",
        "Directory": "目录",
        "Toggle focus mode": "切换专注模式",
        "Edit mode": "编辑模式",

        "Write Mode": "写作模式",
        "Read Mode": "阅读模式",
        "Preview Mode": "预览模式",
        "Wide": "宽",
        "Medium": "中等",
        "Narrow": "窄",

        "Yes": "是",
        "No": "否",
        "Cancel": "取消",
        "Confirm": "询问",

        "Save changes to file?": "将修改保存到文件？",
        "File changed by another program, reload?": "文件被另一程序修改，是否重新加载？",

        "Markdown Documents": "Markdown 文档",
        "HTML Documents": "HTML 文档",
        "PDF Documents": "PDF 文档",
        "CSS Files": "CSS 文件",
        "All Files": "所有文件",
        "Saved successfully.": "保存成功。",
        "Can't save file": "无法保存文件",
        "Exporting as HTML, please wait ...": "正在导出为 HTML，请稍候 ...",
        "Exporting as PDF, please wait ...": "正在导出为 PDF，请稍候 ...",
        "Can't export as HTML": "无法导出为 HTML",
        "Can't export as PDF": "无法导出为 PDF",

        "General": "通用",
        "Edit": "编辑",
        "Appearance": "外观",
        "Render": "渲染",
        "Language": "语言",
        "Reload when file changed": "当文件被修改时，重新加载",
        "Font": "字体",
        "Font Size": "字体大小",
        "Line Height": "行高",
        "Tab Size": "Tab 大小",
        "Color Theme": "颜色主题",
        "TeX Math Expressions": "TeX 数学表达式",
        "UML Diagrams": "UML 图表",
        "Highlight Theme": "高亮主题",
        "Render Theme": "渲染主题",
        "Custom CSSs": "自定义 CSS",

        "Default": "默认",
        "System Default": "系统默认",

        "version": "版本",

        "English": "英文",
        "Simplified Chinese": "简体中文",
        "German": "德语",
        "Portuguese": "葡萄牙语",
        "French": "法语",

        "Auto": "自动",
        "Prompt": "询问",
        "Never": "从不",

        "Undo": "撤销",
        "Redo": "重做",
        "Cut": "剪切",
        "Copy": "复制",
        "Paste": "粘贴",
        "Delete": "删除",
        "Select All": "全选",

        "Services": "服务",
        "Hide": "隐藏",
        "Hide Others": "隐藏其他",
        "Show All": "显示全部",
        "Quit": "退出",
        "Close": "关闭",
        "Minimize": "最小化",
        "Zoom": "缩放",
        "Bring All to Front": "前置全部窗口",
        "File": "文件",
        "Export": "导出",
        "Mode": "模式",
        "View": "查看",
        "Window": "窗口",
        "Help": "帮助",
        "Toggle Developer Tools": "切换开发者工具",
        "Preference": "偏好设置"
    },
	"de": {
        "Yes": "Ja",
        "No": "Nein",
        "Cancel": "Abbrechen",
        "Confirm": "Bestätigen",

        "Save changes to file?": "Änderungen speichern?",

        "Markdown Documents": "Markdown Dokumente",
        "All Files": "Alle Dateien"
	},
	"pt": {
        "Yes": "Sim",
        "No": "Não",
        "Cancel": "Cancelar",
        "Confirm": "Confirmar",

        "Save changes to file?": "Salvar as alterações no arquivo?",

        "Markdown Documents": "Documentos Markdown",
        "HTML Documents": "Documentos HTML",
        "PDF Documents": "Documentos PDF",
        "All Files": "Todos Arquivos"
	},
	"fr": {
        "New": "Nouveau",
        "Open": "Ouvrir",
        "Save": "Enregistrer",
        "Save as": "Enregistrer sous",
        "Export as HTML": "Exporter comme HTML",
        "Export as PDF": "Exporter comme PDF",
        "Settings": "Paramètres",
        "About": "À propos",

        "Menu": "Menu",
        "Directory": "Répertoire",
        "Toggle focus mode": "Baculer en mode focus",
        "Edit mode": "Mode édition",

        "Write Mode": "Mode écriture",
        "Read Mode": "Mode lecture",
        "Preview Mode": "Mode prévisualisation",
        "Wide": "Large",
        "Medium": "Moyen",
        "Narrow": "Étroit",

        "Yes": "Oui",
        "No": "Non",
        "Cancel": "Annuler",
        "Confirm": "Confirmer",

        "Save changes to file?": "Enregistrer les changements ?",
        "File changed by another program, reload?": "Fichier modifié par un autre programme, recharger ?",

        "Markdown Documents": "Documents Markdown",
        "HTML Documents": "Documents HTML",
        "PDF Documents": "Documents PDF",
        "CSS Files": "Fichiers CSS",
        "All Files": "Tous les fichiers",
        "Saved successfully.": "Enregistrement réussi.",
        "Can't save file": "Impossible d'enregistrer le fichier",
        "Exporting as HTML, please wait ...": "Exportation comme HTML, veuillez patienter...",
        "Exporting as PDF, please wait ...": "Exportation comme PDF, veuillez patienter...",
        "Can't export as HTML": "Ne peut pas être exporté comme HTML",
        "Can't export as PDF": "Ne peut pas être exporté comme PDF",

        "General": "Général",
        "Edit": "Édition",
        "Appearance": "Apparence",
        "Render": "Rendu",
        "Language": "Langue",
        "Reload when file changed": "Recharger quand le fichier est modifié",
        "Font": "Police",
        "Font Size": "Taille de la police",
        "Line Height": "Hauteur de ligne",
        "Tab Size": "Taille de tabulation",
        "Color Theme": "Couleur du thème",
        "TeX Math Expressions": "Expressions TeX Math",
        "UML Diagrams": "Diagrammes UML",
        "Highlight Theme": "Thème de coloration syntaxique",
        "Render Theme": "Thème de rendu",
        "Custom CSSs": "CSS personnalisés",

        "Default": "Par défaut",
        "System Default": "System Default",

        "version": "version",

        "English": "Anglais",
        "Simplified Chinese": "Chinois simplifié",
        "German": "Allemand",
        "Portuguese": "Portuguais",
        "French": "Français",

        "Auto": "Auto",
        "Prompt": "Demander",
        "Never": "Jamais",

        "Undo": "Annuler",
        "Redo": "Refaire",
        "Cut": "Coupper",
        "Copy": "Copier",
        "Paste": "Coller",
        "Delete": "Supprimer",
        "Select All": "Tout sélectionner",

        "Services": "Services",
        "Hide": "Cacher",
        "Hide Others": "Cacher les autres",
        "Show All": "Afficher tout",
        "Quit": "Quitter",
        "Close": "Fermer",
        "Minimize": "Minimiser",
        "Zoom": "Zoom",
        "Bring All to Front": "Tout devant",
        "File": "Fichier",
        "Export": "Exportation",
        "Mode": "Mode",
        "View": "Voir",
        "Window": "Fenêtre",
        "Help": "Aide",
        "Toggle Developer Tools": "Basculer les outils développeurs",
        "Preference": "Préférence"
	}
}

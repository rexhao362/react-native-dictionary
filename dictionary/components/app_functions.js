import React from 'react'
import { SectionList, Text } from 'react-native'
const styles = require('./src/styles')

const displayDefSections = definitions => {
    array = []
    for (const [key, value] of Object.entries(definitions)) {
        const section = { title: key, data: value }
        array.push(section)
    }
    return (
        <SectionList
            sections={array}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({ section }) => (
                <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={item => `basicListEntry-${item}`}
        />
    )
}

module.exports = displayDefSections

import xml.etree.ElementTree as ET

def compare_and_merge_xlf(source_path, target_path, output_path):
    source_tree = ET.parse(source_path)
    target_tree = ET.parse(target_path)

    source_root = source_tree.getroot()
    target_root = target_tree.getroot()

    source_units = {
        unit.attrib["id"]: unit
        for unit in source_root.findall(".//trans-unit")
    }

    target_units = {
        unit.attrib["id"]: unit
        for unit in target_root.findall(".//trans-unit")
    }

    body = target_root.find(".//body")

    added = 0
    for trans_id, unit in source_units.items():
        if trans_id not in target_units:
            # Clone source <trans-unit>
            new_unit = ET.Element("trans-unit", {"id": trans_id, "datatype": "html"})
            source = unit.find("source")
            if source is not None:
                new_source = ET.SubElement(new_unit, "source")
                new_source.text = source.text
            # Add empty <target>
            ET.SubElement(new_unit, "target").text = ""
            body.append(new_unit)
            added += 1

    target_tree.write(output_path, encoding="utf-8", xml_declaration=True)
    print(f"✅ Merged {added} missing entries into {output_path}")

# Usage
compare_and_merge_xlf("messages.xlf", "messages.zh.xlf", "messages.zh.updated.xlf")
